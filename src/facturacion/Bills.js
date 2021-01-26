import React from 'react';
import Bill from './Bill.js';
import Alert from './Alert.js';
import NewBill from './NewBill.js';
import EditBill from './EditBill.js';
import BillsApi from './BillsApi.js';


class Bills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            bills: [],
            isEditing: {}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addBill = this.addBill.bind(this);
        // this.handleGenerate = this.handleGenerate.bind(this);
    }

    componentDidMount() {
        BillsApi.getAllBills() 
            .then(
                (result) => {
                this.setState({ bills: result })
            },(error) => {
                this.setState({
                    errorInfo: "Problem with connection to server"
                })
            })
        }

    handleEdit(bill) {
        this.setState(prevState => ({
             isEditing: {...prevState.isEditing, [bill.billNumber]: bill}
        }));
    }

/*    handleGenerate(bill) {
        BillsApi.GeneratePdf(bill.billNumber);
    }
*/
    handleDelete(bill) {
        this.setState(prevState => ({
            bills: prevState.bills.filter((b) => b.billNumber !== bill.billNumber)
        }))
        BillsApi.deleteBill(bill.billNumber);
    }
    handleCancel(billStatus, bill) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[billStatus];
            return {
                isEditing: isEditing
            }
        })
    }

    handleChange(billNumber, bill) {
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [billNumber]: bill}
        }))
    }

    handleSave(billNumber, bill) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[billNumber];

            const bills = prevState.bills;
            const pos = bills.findIndex(c => c.billStatus !== bill.billStatus && c.billNumber === bill.billNumber);
            BillsApi.updateBill(bill);
            if (pos !== -1){
                return {
                    bills: [...bills.slice(0,pos), Object.assign({}, bill), ...bills.slice(pos+1)],
                    isEditing: isEditing
                }
            }
            else{
                return {
                    errorInfo: "No ha cambiado el estado",
                }
            }
        });
    }

    handleCloseError() {
        this.setState({
            errorInfo: null
        });
    }


    isInvalid(stringValue)
    {
        return stringValue === "" || stringValue === "--"
    }

    invalidBillNumber(stringValue)
    {
        const BILL_NUMBER_REG_EX=new RegExp('[A-Z]{2}[0-9]{5}'); 
        return stringValue.match(BILL_NUMBER_REG_EX)
    }

    invalidDuration(stringValue)
    {
        const DURATION_STRINGR_REG_EX=new RegExp('[0-9]{2}:[0-5][0-9]:[0-5][0-9]'); 
        return stringValue.match(DURATION_STRINGR_REG_EX)
    }

    rateCalculation (vehicle){
        let rate;
        switch(vehicle){
            case "Coche":
                rate = 3;
                break;
            case "Moto":
                rate = 2;
                break;
            case "Bici":
                rate = 1;
                break;  
            default:
                rate = 1;   
                break;  
        }
        return rate;
    }
    
    durationMinutesConversion (duration){
        let durationSplited = duration.split(":");
        let hours = parseInt(durationSplited[0] * 60);
        let min = parseInt(durationSplited[1]);
        let sec = 1;
        if(parseInt(durationSplited[2]) === 0){
            sec = 0;
        }
        return hours+min+sec;
    }
    
    amountCalculation (duration, vehicle){
        let rate = this.rateCalculation(vehicle);
        let minTax = 1.25;
        let amount = (this.rateConversion(rate) * this.durationMinutesConversion(duration))/100;
        if(amount>=minTax){
            return amount;
        } else{
            return minTax;
        }
    }
    rateConversion(rate){
        let conversion;
        switch(rate){
            case 3:
                conversion = 15;
                break;
            case 2:
                conversion = 10;
                break;
             case 1:
                conversion = 5;
                break;
            default:
                console.error("Not admitted rate!!"); 
                break;
    
        }
        return conversion
    }

    addBill(bill) {
        if(this.isInvalid(bill.billStatus) 
            || this.isInvalid(bill.vehicle)
            || this.isInvalid(bill.name)
            || this.isInvalid(bill.surnames)){
                console.log("ERROR");
                return {
                    errorInfo: "Input de seleccion erroneo"
                };
         }else{ this.setState(prevState => {
                const bills = prevState.bills; 
                if (! bills.find(v => v.billNumber === bill.billNumber || ! this.invalidBillNumber(bill.billNumber) || ! this.invalidDuration(bill.duration))) { 
                    console.log("addBill: " + bill);
                    BillsApi.postBill(bill);
                    bill.rate = this.rateCalculation(bill.vehicle);
                    bill.amount = this.amountCalculation(bill.duration, bill.vehicle);
                    return ({bills: [...prevState.bills, bill], errorInfo: "!Factura creada correctamente"})
                }
                else if (this.invalidBillNumber(bill.billNumber) === null){
                    return({
                        errorInfo: "Nº factura debe tener 2 letras y 5 números"
                        });
                }
                else if (this.invalidDuration(bill.duration) === null){
                    return({
                        errorInfo: "La druación debe venir en formato HH:MM:SS"
                        });
                }
                else{
                return({
                    errorInfo: 'Ya existe la factura'
                    });
                }
            });    
        }
    }

    render() {
        return(
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError} />
                <table className="table">
                    <thead>
                    <div className="ml-auto">
                    </div>
                        <tr>
                            <th>Número de factura</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Vehículo</th>
                            <th>Duración</th>
                            <th>Tarifa</th>
                            <th>Importe</th>
                            <th>Estado</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <NewBill onAddBill={this.addBill}/>
                    {this.state.bills.map((bill) => 
                ! this.state.isEditing[bill.billNumber] ?
                <Bill key={bill.billNumber} bill={bill} 
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    // onGenerate={this.handleGenerate}
                    />
                :
                <EditBill key={bill.billNumber} bill={this.state.isEditing[bill.billNumber]} 
                    onCancel={this.handleCancel.bind(this, bill.billNumber)}
                    onChange={this.handleChange.bind(this, bill.billNumber)}
                    onSave={this.handleSave.bind(this, bill.billNumber)}/>
            )}
                </table>
            </div>
        );
    }
}

export default Bills;