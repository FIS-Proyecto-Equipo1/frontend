import React from 'react';

function Viaje(props) {
    return(
    <tr>
        <td>cliente: {props.viaje.id_cliente}</td>
        <td>id_vehiculo: {props.viaje.id_vehiculo}</td>
        <td>estado: {props.viaje.estado}</td>
        <td>duracion: {props.viaje.duracion}</td>
    </tr>
    );
}

export default Viaje;