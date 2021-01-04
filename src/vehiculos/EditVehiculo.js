import React from 'react';

function EditVehiculo (props){
    const handleChange = event => {
        props.onChange({...props.vehiculo, [event.target.name]: event.target.value})
    }


    return (
        <tr>
            <td><input className="form-control" name="matricula" value={props.vehiculo.matricula} onChange={handleChange}/></td>
            <td><input className="form-control" name="estado" value={props.vehiculo.estado} onChange={handleChange}/></td>
            <td><input className="form-control" name="permiso" value={props.vehiculo.permiso} onChange={handleChange}/></td>
            <td><input className="form-control" name="localizacion" value={props.vehiculo.localizacion} onChange={handleChange}/></td>
            <td><input className="form-control" name="tipo" value={props.vehiculo.tipo} onChange={handleChange}/></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave(props.vehiculo)}>Save</button>
                <button className="btn btn-primary" onClick={() => props.onCancel(props.vehiculo)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditVehiculo;