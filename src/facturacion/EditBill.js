import React from 'react';
 

function EditBill(props) {
    const handleChange = event => {
        props.onChange({...props.bill, [event.target.name]: event.target.value})
    }

    return (
        <tr>
        
            <td>{props.bill.billNumber}</td>    
            <td>{props.bill.name}</td>            
            <td>{props.bill.surnames}</td>
            <td>{props.bill.vehicle}</td>
            <td>{props.bill.duration}</td>
            <td>{props.bill.rate}</td>
            <td>{parseFloat(Math.round(props.bill.amount)/100).toFixed(2) + "€"}</td>
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
