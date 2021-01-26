import React from 'react';

function VehiculoBase(props){
    return (
        <tr>
            <td>{props.vehiculo.matricula}</td>
            <td>{props.vehiculo.estado}</td>
            <td>{props.vehiculo.permiso}</td>
            <td>{props.vehiculo.localizacion}</td>
            <td>{props.vehiculo.tipo}</td>
            </tr>
    );
}

export default VehiculoBase;