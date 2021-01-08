import React from 'react';
import Viaje from './viaje.js';
import ViajesApi from './ViajesApi.js';


class Viajes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            viajes: []
        };
    }

    componentDidMount() {  //react va a llamar a este método cuando el componente se instancia
        ViajesApi.getAllTravels()
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
                <Viaje viaje={viaje}/>
            )}
            </table>
            </div>

        );
    }
}

export default Viajes; 