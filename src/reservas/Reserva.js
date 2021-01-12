import React from 'react';

function Reserva(props){
    return (
        <tr>
            <td>{props.reserva.id_reservation}</td>
            <td>{props.reserva.id_vehicle}</td>
            <td>{props.reserva.id_client}</td>
            <td>{props.reserva.creation_datetime}</td>
            <td>{props.reserva.expiration_datetime}</td>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.reserva)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.reserva)}>Delete</button></td>
        </tr>
    );
}

export default Reserva;