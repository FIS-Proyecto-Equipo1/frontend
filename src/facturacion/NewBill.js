import React from 'react';
import { validateLocaleAndSetLanguage } from 'typescript';

const validBillNumberRegex = RegExp("^[A-Z]{2}(?!.*(LL|CH))[0-9]{1,5}");

class NewBill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surnames: '', vehicle: '', amount:'', billStatus: ''};
        this.changeBill = this.changeBill.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeBill(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        
        this.setState({
            [name]: value
        });
    }
    
    clickAdd() {
        this.props.onAddBill(this.state);
        this.setState({
            billNumber:'',name: '', surnames: '', vehicle: '', amount:'', billStatus:''
        });

    }

    render(){
        return(
            <tr>
                <td><input className="form-control" name="billNumber" value={this.state.billNumber} onChange={this.changeBill}/></td>
                <td><input className="form-control" name="name" value={this.state.name} onChange={this.changeBill} /></td>
                <td><input className="form-control" name="surnames" value={this.state.surnames} onChange={this.changeBill} /></td>
                <td>
                <select className="form-control" name="vehicle" value={this.state.vehicle} onChange={this.changeBill}>
                    <option value="">--</option>
                    <option value="Coche">Coche</option> 
                    <option value="Moto">Moto</option>
                    <option value="Bici">Bici</option> 
                    <option value="Patin">Patin</option>  
 
                </select>
                </td>
                <td><input className="form-control" name="duration" value={this.state.duration} onChange={this.changeBill} /></td>
                <td><text name="rate" value="" /></td>
                <td><text name="amount" value="" /></td>
                <td>
                 <select className="form-control" name="billStatus" value={this.state.billStatus} onChange={this.changeBill}>
                    <option value="">--</option>
                    <option value="Pagado">Pagado</option> 
                    <option value="No pagado">No pagado</option> 
                </select>
                </td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Save Bill</button></td>
                
            </tr>
        );
    }
}

export default NewBill;