import React from 'react';

function Viaje(props) {
    return(
    <tr>
        <td>{props.viaje.id_cliente}</td>
        <td>{props.viaje.id_vehiculo}</td>
        <td>{props.viaje.estado}</td>
        <td>{props.viaje.duracion}</td>
        <td>
            <button className="btn btn-primary" onClick={() => props.onDelete(props.viaje)}>Delete</button>
        </td>
    </tr>
    );
}

export default Viaje;