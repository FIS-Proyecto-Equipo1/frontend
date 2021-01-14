import React from 'react';

function Bill(props) {
    return(
        <tr>
            <td>{props.bill.billNumber}</td>    
            <td>{props.bill.name}</td>            
            <td>{props.bill.surnames}</td>
            <td>{props.bill.vehicle}</td>
            <td>{props.bill.duration}</td>
            <td>{props.bill.rate}</td>
            <td>{parseFloat(Math.round(props.bill.amount)/100).toFixed(2) + "€"}</td>
            <td>{props.bill.billStatus}</td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onEdit(props.bill)}>Edit</button>
                <button className="btn btn-primary" onClick={() => props.onDelete(props.bill)}>Delete</button>
            </td>
        </tr>
    )
}

export default Bill;