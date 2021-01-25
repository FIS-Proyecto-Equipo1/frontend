import React from 'react';

function Reserva(props){
    return (
        <tr>
            <td>{props.reserva._id}</td>
            <td>{props.reserva.id_vehicle}</td>
            <td>{props.reserva.id_client}</td>
            <td>{props.reserva.status}</td>
            <td>{props.reserva.creation_datetime}</td>
            <td>{props.reserva.expiration_datetime}</td>
            <td>{  props.reserva.status ==='RESERVADA' ? 
                <div>
                    <button className="btn btn-primary" onClick={() => props.onDesbloquear(props.reserva)}>Desbloquear</button> 
                    <button className="btn btn-primary" onClick={() => props.onDelete(props.reserva)}>Cancelar</button> 
                </div>
            : ''}</td>
        </tr>
    );
}

export default Reserva;