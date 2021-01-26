import React from 'react';
import Alert from './Alert.js';
import Reserva from './Reserva.js';
import NuevaReserva from './NuevaReserva.js'
import EditReserva from './EditReserva.js'
import ReservasApi from './ReservasApi.js';


class Reservas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            errorInfo: null,
            reservas: [],
            isEditing: {}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.handleReload = this.handleReload.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDesbloquear = this.handleDesbloquear.bind(this);
    }

    componentDidMount() {
        this.setState({rol: window.localStorage.getItem("rol")})
        ReservasApi.getReservas()
        // axios.get(ReservasApi.API_BASE_URL + "/reservas")
            .then(
                result => {
                    const reservas = result.data;
                this.setState({ reservas })
            },(error) => {
                this.setState({
                    errorInfo: "Problem with connection to server"
                })
            })
        }

    handleReload(){
        
            ReservasApi.getReservas()
            // axios.get(ReservasApi.API_BASE_URL + "/reservas")
                .then(
                    result => {
                        const reservas = result.data;
                        this.setState(prevState => ({ reservas: reservas}))

                },(error) => {
                    this.setState(prevState => ({
                        errorInfo: "Problem with connection to server"
                    }))
                })
    

    }    
    
    handleEdit(reserva){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [reserva._id]: reserva}
        }));
    }

    handleDelete(reserva){
        ReservasApi.deleteReserva(reserva)
        .then(result => {
            if( result.error){
                this.setState({
                    errorInfo: result.error
                })
                return
            }
            // console.log(errorM)
            this.handleReload();
        },(error) => {
            this.setState({
                errorInfo: "Problem with connection to server"
            })
        });
    }

    handleCloseError(){
        this.setState({
            errorInfo: null
        });
    }

    handleChange(_id, reserva){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [_id]: reserva}
        }))
    }

    handleDesbloquear(_id, reserva){
        console.log("Desbloquear " + _id)
        ReservasApi.desbloqueaVehiculo(_id)
        .then(result => {
            if( result.error){
                this.setState({
                    errorInfo: result.error
                })
                return
            }
            this.handleReload();
        });
    }


    isInvalid(stringValue)
    {
        return stringValue === "" || stringValue === "--"
    }


    render(){
        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError}/>
                {this.state.rol == "USER"?<NuevaReserva reloadReservas={this.handleReload.bind()}/>:''}
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id Reserva</td>
                            <td>Id Vehiculo</td>
                            <td>Id Cliente</td>
                            <td>Estado</td>
                            <td>Fecha de creacion</td>
                            <td>Fecha de expiracion</td>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.reservas.map((reserva) => 
                        <Reserva key={reserva._id} reserva={reserva} rol={this.state.rol}
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete.bind(this,reserva._id)}
                        onDesbloquear={this.handleDesbloquear.bind(this,reserva._id)}/>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }    
}
export default Reservas;