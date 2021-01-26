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
            <td>{parseFloat(props.bill.amount).toFixed(2) + "€"}</td>
            <td>{props.bill.billStatus}</td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onEdit(props.bill)}>Editar</button>
                <button className="btn btn-danger" onClick={() => props.onDelete(props.bill)}>Borrar</button>
                {/* <button className="btn btn-link" onClick={() => props.onGenerate(props.bill)}>Generar PDF</button> */}
            </td>
        </tr>
    )
}

export default Bill;