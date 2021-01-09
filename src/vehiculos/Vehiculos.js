import React from 'react';
import Vehiculo from './Vehiculo.js';
import Alert from './Alert.js';
import NuevoVehiculo from './NuevoVehiculo.js'
import EditVehiculo from './EditVehiculo.js'

import VehiculosApi from './VehiculosApi.js';

import axios from 'axios';

class Vehiculos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            errorInfo: null,
            vehiculos: [],
            isEditing: {}
        };
        this.handleEdit = this.handleEdit.bind(this); //necesario para poder utilizar this
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addVehiculo = this.addVehiculo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get(VehiculosApi.API_BASE_URL + "/vehicles")
            .then(
                result => {
                    const vehiculos = result.data;
                this.setState({ vehiculos })
            },(error) => {
                this.setState({
                    errorInfo: "Problem with connection to server"
                })
            })
        }
    
    handleEdit(vehiculo){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [vehiculo.matricula]: vehiculo} //asegurarse de que el estado es inmutable
        }));
    }

    handleDelete(vehiculo){
        this.setState(prevState => ({
            vehiculos: prevState.vehiculos.filter((v) => v.matricula !== vehiculo.matricula)
        }))
        VehiculosApi.deleteVehicle(vehiculo);
    }

    handleCloseError(){
        this.setState({
            errorInfo: null //asegurarse de que el estado es inmutable
        });
    }

    handleCancel(matricula, vehiculo){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[matricula];
            return {
                isEditing: isEditing
            }
        })
    }

    handleChange(matricula, vehiculo){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [matricula]: vehiculo}
        }))
    }

    handleSave(matricula, vehiculo){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[matricula];
            if(matricula === vehiculo.matricula) {
                const vehiculos = prevState.vehiculos;
                const pos = vehiculos.findIndex(v => v.matricula === vehiculo.matricula);
                console.log(vehiculos[pos]);
                VehiculosApi.updateVehicle(vehiculo);
                return {
                    vehiculos: [...vehiculos.slice(0,pos),vehiculo, ...vehiculos.slice(pos + 1)],
                    isEditing: isEditing
                }
            }
            return{
                errorInfo: "Cannot edit matricula"
                // isEditing: isEditing
            }
        });
    }

    deleteVehiculo(vehiculo){
        this.setState(prevState => {
            const vehiculos = prevState.vehiculos; //Cogemos los vehiculos existentes
            if (vehiculos.find(v => v.matricula === vehiculo.matricula)) { //Comprobamos que borramos uno existente
                console.log("Deleted: "+vehiculo);
                VehiculosApi.deleteVehicle(vehiculo);
                return({
                    vehiculos: [...prevState.vehiculos] //creamos nuevo array con contenido anterior + nuevo
                });
            }
            return({
                //vehiculos: [...prevState.vehiculos, vehiculo]
                errorInfo: "Vehicle does not exist"
            });
        });
    }

    isInvalid(stringValue)
    {
        return stringValue === "" || stringValue === "--"
    }

    addVehiculo(vehiculo){
        console.log(vehiculo.tipo);
        if(this.isInvalid(vehiculo.tipo) || this.isInvalid(vehiculo.estado) || this.isInvalid(vehiculo.permiso)){
            console.log("MAL");
            return {
                errorInfo: "Input de seleccion erroneo"
            };
        }else{
            this.setState(prevState => {
                const vehiculos = prevState.vehiculos; //Cogemos los vehiculos existentes
                if (! vehiculos.find(v => v.matricula === vehiculo.matricula)) { //Comprobamos que no añadamos uno existente
                    console.log("AddVehiculo: "+vehiculo);
                    VehiculosApi.postVehicle(vehiculo);
                    return ({vehiculos: [...prevState.vehiculos, vehiculo]});
                }
                else{
                return({
                    //vehiculos: [...prevState.vehiculos, vehiculo]
                    errorInfo: "Vehicle already exists"
                    });
                }
            });    
        }
    }

    render(){
        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError}/>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Matrícula</td>
                            <td>Estado</td>
                            <td>Permiso</td>
                            <td>Localización</td>
                            <td>Tipo</td>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    <NuevoVehiculo onAddVehiculo={this.addVehiculo}/>
                    {this.state.vehiculos.map((vehiculo) => 
                        ! this.state.isEditing[vehiculo.matricula] ?
                        <Vehiculo key={vehiculo.matricula} vehiculo={vehiculo} 
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete.bind(this,vehiculo.matricula)}/>
                        :
                        <EditVehiculo key={vehiculo.matricula} vehiculo={this.state.isEditing[vehiculo.matricula]} 
                            onCancel={this.handleCancel.bind(this,vehiculo.matricula)}
                            onChange={this.handleChange.bind(this,vehiculo.matricula)}
                            onSave={this.handleSave.bind(this,vehiculo.matricula)}/>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }    
}
export default Vehiculos;