import React from 'react';
import Viaje from './viaje.js';
import ViajesApi from './ViajesApi.js';

class Viajes_admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            viajes: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {  //react va a llamar a este método cuando el componente se instancia
        ViajesApi.getAllTravelsAdmin()
            .then(
                (result) => {
                    this.setState({
                        viajes: result
                    })
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
    }

    handleDelete(viaje) {
        this.setState(prevState => ({
            viajes: prevState.viajes.filter((c) => c._id !== viaje._id)
        }))
        ViajesApi.DeleteTravel(viaje._id);
    }

    render() {
        return(
            <div>
            <table class="table">
            <thead>
                <tr>
                    <th>id_cliente</th>
                    <th>id_vehiculo</th>
                    <th>estado</th>
                    <th>duracion</th>
                </tr>
            </thead>
            {this.state.viajes.map((viaje) =>
                <Viaje viaje={viaje} onDelete={this.handleDelete}/>
            )}
            </table>
            </div>

        );
    }
}

export default Viajes_admin; 