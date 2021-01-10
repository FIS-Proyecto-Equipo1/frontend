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
             isEditing: {...prevState.isEditing, [bill.billStatus]: bill}
        }));
    }

    handleDelete(bill) {
        this.setState(prevState => ({
            bills: prevState.bills.filter((b) => b.billNumber !== bill.billNumber)
        }))
        BillsApi.deleteBill(bill);
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

    handleChange(billStatus, bill) {
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [billStatus]: bill}
        }))
    }

    handleSave(billStatus, bill) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[billStatus];

            if (billStatus !== bill.billStatus) {
                const bills = prevState.bills;
                const pos = bills.findIndex(c => c.billStatus !== bill.billStatus);
                BillsApi.updateBill(bill);
                return {
                    bills: [...bills.slice(0,pos), Object.assign({}, bill), ...bills.slice(pos+1)],
                    isEditing: isEditing
                }
            }

            return {
                errorInfo: "You only can edit status",
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
                if (! bills.find(v => v.billNumber === bill.billNumber)) { 
                    console.log("addBill: "+bill);
                    BillsApi.postBill(bill);
                    return ({bills: [...prevState.bills, bill]});
                }
                else{
                return({
                    errorInfo: "Bill already exists"
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
                ! this.state.isEditing[bill.billStatus] ?
                <Bill key={bill.billStatus} bill={bill} 
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}/>
                :
                <EditBill key={bill.billStatus} bill={this.state.isEditing[bill.billStatus]} 
                    onCancel={this.handleCancel.bind(this, bill.billStatus)}
                    onChange={this.handleChange.bind(this, bill.billStatus)}
                    onSave={this.handleSave.bind(this, bill.billStatus)}/>
            )}
                </table>
            </div>
        );
    }
}

export default Bills;