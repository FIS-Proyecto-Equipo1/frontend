import React from 'react';

function EditReserva (props){
    const handleChange = event => {
        props.onChange({...props.reserva, [event.target.name]: event.target.value})
    }


    return (
        <tr>
            <td><input className="form-control" name="matricula" value={props.vehiculo.matricula} onChange={handleChange}/></td>
            <td><select className="browser-default custom-select" name="estado" id="estado" value={props.vehiculo.estado} onChange={handleChange}>
                    <option value = "TRAYECTO">TRAYECTO</option>
                    <option value = "DISPONIBLE" >DISPONIBLE</option>
                    <option value = "NODISPONIBLE" >NODISPONIBLE</option>
                    <option value = "RESERVADO" >RESERVADO</option>
                    </select></td>
                <td><select className="browser-default custom-select" name="permiso" id="permiso" value={props.vehiculo.permiso} onChange={handleChange}>
                    <option value = "AB">AB</option>
                    <option value = "B" >B</option>
                    <option value = "NO" >NO</option>
                    </select></td>
                <td><input class="form-control inputstl"  name="localizacion" value = {props.vehiculo.localizacion} onChange={handleChange}/></td>
                <td><select className="browser-default custom-select" name="tipo" id="tipo" value={props.vehiculo.tipo} onChange={handleChange}>
                    <option value = "Moto">Moto</option>
                    <option value = "Coche" >Coche</option>
                    <option value = "Patin" >Patin</option>
                    <option value = "Bici" >Bici</option>
                    </select></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave(props.vehiculo)}>Save</button>
                <button className="btn btn-primary" onClick={() => props.onCancel(props.vehiculo)}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditReserva;