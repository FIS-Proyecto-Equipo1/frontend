import React from 'react';

function VehiculoBase(props){
    return (
        <div>
            <td>{props.vehiculo.matricula}</td>
            <td>{props.vehiculo.estado}</td>
            <td>{props.vehiculo.permiso}</td>
            <td>{props.vehiculo.localizacion}</td>
            <td>{props.vehiculo.tipo}</td>
            </div>
    );
}

export default VehiculoBase;