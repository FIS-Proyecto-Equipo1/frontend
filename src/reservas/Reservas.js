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
        this.setState(prevState => ({
            reservas: prevState.reservas.filter((res) => res._id !== reserva._id)
        }))
        ReservasApi.deleteReserva(reserva);
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
        .then(resp => {
            this.handleReload();
        });
    }

    deleteVehiculo(reserva){
        this.setState(prevState => {
            const reservas = prevState.reservas;
            if (reservas.find(res => res._id === reserva._id)) {
                ReservasApi.deleteReserva(reserva._id);
                return({
                    reservas: [...prevState.reservas]
                });
            }
            return({
                errorInfo: "The reservation does not exist"
            });
        });
    }

    isInvalid(stringValue)
    {
        return stringValue === "" || stringValue === "--"
    }

    addReserva(reserva){
        this.setState(prevState => {
            const reservas = prevState.reserva;
            if (! reservas.find(res => res._id === reserva._id)) {
                ReservasApi.postReserva(reserva);
                return ({reservas: [...prevState.reservas, reserva]});
            }
            else{
            return({
                errorInfo: "Reservation already exists"
                });
            }
        });    
    }

    render(){
        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError}/>
                <NuevaReserva reloadReservas={this.handleReload.bind()}/>
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
                        <Reserva key={reserva._id} reserva={reserva} 
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