import React from 'react';
import VehicleBase from './VehiculoBase.js';

function Vehiculo(props){
    return (
        <tr>
            
            <VehicleBase></VehicleBase>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.vehiculo)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.vehiculo)}>Delete</button></td>
        </tr>
    );
}

export default Vehiculo;