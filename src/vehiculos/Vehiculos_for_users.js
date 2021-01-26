import React from 'react';
import VehiculoBase from './VehiculoBase.js';
import Alert from './Alert.js';
import AlertS from './AlertS.js';
import Filter from './Filter.js';


import VehiculosApi from './VehiculosApi.js';

import axios from 'axios';

class Vehiculos_for_users extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            errorInfo: null,
            successInfo: null,
            vehiculos: [],
            isEditing: {}
        };
        this.handleCloseError = this.handleCloseError.bind(this);
        this.handleCloseSuccess = this.handleCloseSuccess.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount(query) {
        let filter= "";
        if(query !== undefined)
        {
            filter = query;
        }
        axios.get(VehiculosApi.API_BASE_URL + "/vehicles" +filter, {
            headers: {
                'Authorization':'Bearer '+window.localStorage.getItem("token")
            }
        })
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
    

    handleCloseError(){
        this.setState({
            errorInfo: null //asegurarse de que el estado es inmutable
        });
    }
    
    handleCloseSuccess(){
        this.setState({
            successInfo:null //asegurarse de que el estado es inmutable
        });
    }

    isInvalid(stringValue)
    {
        return stringValue === "" || stringValue === "--"
    }

    handleFilter(query){
        let auxString =""
        if(query !== undefined)
        {
            auxString += "?";
            if(!this.isInvalid(query.estado))
                auxString += "estado=" +query.estado;
            if(!this.isInvalid(query.permiso))
                auxString += "&permiso=" +query.permiso;   
            if(!this.isInvalid(query.tipo))
                auxString += "&tipo=" +query.tipo;    
        }
        this.componentDidMount(auxString);
    }


    render(){
        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError}/>
                <AlertS message={this.state.successInfo} onClose={this.handleCloseSuccess}/>
                <Filter onFilter={this.handleFilter}/>
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
                        {this.state.vehiculos.map((vehiculo) => 
                            <VehiculoBase key={vehiculo.matricula} vehiculo={vehiculo} />)}
                    </tbody>
                </table>
            </div>
        );
    }    
}
export default Vehiculos_for_users;
