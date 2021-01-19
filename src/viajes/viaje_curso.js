import React from 'react';


function Viaje_curso(props) {
    return(
    <tr>
        <td>{props.viaje_curso.id_cliente}</td>
        <td>{props.viaje_curso.id_vehiculo}</td>
        <td>{props.viaje_curso.estado}</td>
        <td>{props.viaje_curso.duracion}</td>
        <td>
            <button className="btn btn-primary" onClick={() => 
                props.FinalizarViaje(props.viaje_curso)}>Finalizar Viaje</button>
        </td>
    </tr>
    );
}

export default Viaje_curso;