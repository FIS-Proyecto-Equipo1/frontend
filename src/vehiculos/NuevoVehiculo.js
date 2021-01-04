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
                <td><input className="form-control" name="estado" value = {this.state.estado} onChange={this.changeVehiculo}/></td>
                <td><input className="form-control" name="permiso" value = {this.state.permiso} onChange={this.changeVehiculo}/></td>
                <td><input className="form-control" name="localizacion" value = {this.state.localizacion} onChange={this.changeVehiculo}/></td>
                <td><input className="form-control" name="tipo" value = {this.state.tipo} onChange={this.changeVehiculo}/></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Vehiculo</button></td>
            </tr>
        );
    }
}

export default NuevoVehiculo;