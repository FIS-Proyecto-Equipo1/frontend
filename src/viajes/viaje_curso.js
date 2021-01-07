import React from 'react';

function Viaje_curso(props) {
    return(
    <tr>
        <td>cliente: {props.viaje_curso.id_cliente}</td>
        <td>id_vehiculo: {props.viaje_curso.id_vehiculo}</td>
        <td>estado: {props.viaje_curso.estado}</td>
        <td>duracion: {props.viaje_curso.duracion}</td>
        <td>
            <button className="btn btn-primary" onClick={() => 
                props.FinalizarViaje(props.viaje_curso)}>Finalizar Viaje</button>
        </td>
    </tr>
    );
}

export default Viaje_curso;