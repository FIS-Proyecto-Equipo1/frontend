import React from 'react';

class NuevoVehiculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matricula: '', 
            estado: '',
            permiso: '',
            localizacion: '',
            tipo: ''
        };
        this.changeVehiculo = this.changeVehiculo.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeVehiculo(event){
        const matricula = event.target.name;
        const value = event.target.value;
        this.setState({
            [matricula]: value
        });
    }

    clickAdd(){
        this.props.onAddVehiculo(this.state);
        this.setState({
            matricula: '', 
            estado: '',
            permiso: '',
            localizacion: '',
            tipo: ''
        });
    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="matricula" value = {this.state.matricula} onChange={this.changeVehiculo}/></td>
                <td><select name="estado" id="estado" value={this.state.estado} onChange={this.changeVehiculo}>
                    <option value = "">--</option>
                    <option value = "TRAYECTO">TRAYECTO</option>
                    <option value = "DISPONIBLE" >DISPONIBLE</option>
                    <option value = "NODISPONIBLE" >NODISPONIBLE</option>
                    <option value = "RESERVADO" >RESERVADO</option>
                    </select></td>
                <td><select name="permiso" id="permiso" value={this.state.permiso} onChange={this.changeVehiculo}>
                    <option value = "">--</option>
                    <option value = "AB">AB</option>
                    <option value = "B" >B</option>
                    <option value = "NO" >NO</option>
                    </select></td>
                <td><input class="form-control inputstl"  name="localizacion" value = {this.state.localizacion} onChange={this.changeVehiculo}/></td>
                <td><select name="tipo" id="tipo" value={this.state.tipo} onChange={this.changeVehiculo}>
                    <option value = "">--</option>
                    <option value = "Moto">Moto</option>
                    <option value = "Coche" >Coche</option>
                    <option value = "Patin" >Patin</option>
                    <option value = "Bici" >Bici</option>
                    </select></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Vehiculo</button></td>
            </tr>
        );
    }
}

export default NuevoVehiculo;