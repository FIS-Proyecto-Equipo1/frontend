import React from 'react';
import Alert from './Alert.js';
import Reserva from './Reserva.js';
import NuevaReserva from './NuevaReserva.js'
import EditReserva from './EditReserva.js'
import ReservasApi from './ReservasApi.js';
import axios from 'axios';

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
        this.addReserva = this.addReserva.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get(ReservasApi.API_BASE_URL + "/reservas")
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
    
    handleEdit(reserva){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [reserva.id_reservation]: reserva}
        }));
    }

    handleDelete(reserva){
        this.setState(prevState => ({
            reservas: prevState.reservas.filter((res) => res.id_reservation !== reserva.id_reservation)
        }))
        ReservasApi.deleteReserva(id_reservation);
    }

    handleCloseError(){
        this.setState({
            errorInfo: null
        });
    }

    handleCancel(id_reservation, reserva){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[id_reservation];
            return {
                isEditing: isEditing
            }
        })
    }

    handleChange(id_reservation, reserva){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [id_reservation]: reserva}
        }))
    }

    handleSave(id_reservation, reserva){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[id_reservation];
            if(id_reservation === reserva.id_reservation) {
                const reservas = prevState.reservas;
                const pos = reservas.findIndex(res => res.id_reservation === reserva.id_reservation);
                ReservasApi.updateReserva(reserva);
                return {
                    reservas: [...reservas.slice(0,pos),reserva, ...reservas.slice(pos + 1)],
                    isEditing: isEditing
                }
            }
            return{
                errorInfo: "Cannot edit id_reservation"
            }
        });
    }

    deleteVehiculo(reserva){
        this.setState(prevState => {
            const reservas = prevState.reservas;
            if (reservas.find(res => res.id_reservation === reserva.id_reservation)) {
                ReservasApi.deleteReserva(reserva.id_reservation);
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
            if (! reservas.find(res => res.id_reservation === reserva.id_reservation)) {
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
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id Reserva</td>
                            <td>Id Vehiculo</td>
                            <td>Id Cliente</td>
                            <td>Fecha de creacion</td>
                            <td>Fecha de expiracion</td>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    <NuevaReserva onAddReserva={this.addReserva}/>
                    {this.state.reservas.map((reserva) => 
                        ! this.state.isEditing[reserva.id_reservation] ?
                        <Reserva key={reserva.id_reservation} reserva={reserva} 
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete.bind(this,reserva.id_reservation)}/>
                        :
                        <EditReserva key={reserva.id_reservation} reserva={this.state.isEditing[reserva.id_reservation]} 
                            onCancel={this.handleCancel.bind(this,reserva.id_reservation)}
                            onChange={this.handleChange.bind(this,reserva.id_reservation)}
                            onSave={this.handleSave.bind(this,reserva.id_reservation)}/>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }    
}
export default Reservas;