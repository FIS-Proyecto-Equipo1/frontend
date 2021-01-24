import React from 'react';
import VehicleBase from './VehiculoBase.js';

function Vehiculo(props){
    return (
        <tr>
            
            <td>{props.vehiculo.matricula}</td>
            <td>{props.vehiculo.estado}</td>
            <td>{props.vehiculo.permiso}</td>
            <td>{props.vehiculo.localizacion}</td>
            <td>{props.vehiculo.tipo}</td>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.vehiculo)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.vehiculo)}>Delete</button></td>
        </tr>
    );
}

export default Vehiculo;