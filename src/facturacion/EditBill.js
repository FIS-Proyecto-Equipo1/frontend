import React from 'react';

function EditBill(props) {
    const handleChange = event => {
        props.onChange({...props.bill, [event.target.name]: event.target.value})
    }

    return (
        <tr>
        
            <td><text className="form-control" name="billNumber" value={props.bill.billNumber}/></td>
            <td><text className="form-control" name="name" value={props.bill.name}/></td>
            <td><text className="form-control" name="surnames" value={props.bill.surnames}/></td>
            <td><text className="form-control" name="vehicle" value={props.bill.vehicle}/></td>
            <td><text className="form-control" name="duration" value={props.bill.duration}/></td>
            <td><text className="form-control" name="rate" value={props.bill.rate}/></td>
            <td><text className="form-control" name="amount" value={props.bill.amount}/></td>
            <td>
            <select className="form-control" name="billStatus" value={props.bill.billStatus} onChange={handleChange}>
                <option value="Pagado">Pagado</option> 
                <option value="No pagado">No pagado</option> 
            </select>
            </td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave(props.bill)}>Save</button>
                <button className="btn btn-primary" onClick={() => props.onCancel(props.bill)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditBill; 
