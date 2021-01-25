import React from 'react';
import axios from 'axios';
import VehiculosApi from '../vehiculos/VehiculosApi.js';
import Select from 'react-select'
import ReservasApi from './ReservasApi.js';

class NuevaReserva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id_vehicle: '',
            destination: '',
            add_id_vehicle: ''
        };
        this.changeMatricula = this.changeMatricula.bind(this);
        this.changeDestination = this.changeDestination.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    // vehiculos = []
    componentDidMount() {
        axios.get(VehiculosApi.API_BASE_URL + "/vehicles?estado=DISPONIBLE", {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem("token")
            }
        })
            .then(
                result => {
                    const vehiculos = result.data;
                    this.setState({ vehiculos })
                }, (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                })
    }

    // https://urbanio.herokuapp.com/api/v1/vehicles?estado=DISPONIBLE
    changeMatricula(selection, action) {
        // console.log(selection)

        this.setState({
            id_vehicle: selection,
            add_id_vehicle: selection.matricula
        });
    }

    changeDestination(event) {
        // console.log(event.target.value)

        this.setState({
            destination: event.target.value
        });
    }

    clickAdd() {
        console.log(this.state)
        const reserva = {
            id_vehicle: this.state.add_id_vehicle,
            destination: this.state.destination
        }
        ReservasApi.postReserva(reserva).then(reservaGuardada => {
            console.log("Guardado"+reservaGuardada)
            this.componentDidMount()
            this.props.reloadReservas()
        })
        this.setState({
            id_reservation: 0,
            id_vehicle: '',
            add_id_vehicle: '',
            add_destination: '',
            id_client: 0,
            creation_datetime: 0,
            expiration_datetime: 0
        });
    }

    render() {
        return (
            <div>
                <h2>Añadir reserva</h2>
                <div><label>Vehículo:</label>
                <Select 
                        name="id_vehicle" id="id_vehicle" 
                        options={this.state.vehiculos}
                        getOptionLabel={(option)=>option.matricula}
                        getOptionValue={(option)=>option.matricula}
                        value={this.state.id_vehicle}
                        onChange={(selection, action) => this.changeMatricula(selection, action)}/>
                </div>
                <div><label>Destino:</label>
                    <input className="form-control" name="destination" value={this.state.destination} onChange={this.changeDestination} />
                </div>

                <div class="mt-3 mb-3"><button className="btn btn-primary" onClick={this.clickAdd}>Añadir Reserva</button></div>
            </div>
        );
    }
}

export default NuevaReserva;