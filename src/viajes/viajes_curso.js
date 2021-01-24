import React from 'react';
import Viaje_curso from './viaje_curso.js';
import ViajesApi from './ViajesApi.js';
import Cronometro from './cronometro.js';


class ViajesCurso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            viajes_curso: [],
            status: false,
            runningTime: 0
        };
        this.handleFinalizarviaje = this.handleFinalizarviaje.bind(this);
        this.handleCronometro= this.handleCronometro.bind(this);
    }

    componentDidMount() {  //react va a llamar a este método cuando el componente se instancia
        ViajesApi.getOnGoingTravels()
            .then(
                (result) => {
                    this.setState({
                        viajes_curso: result
                    })
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
    }

    handleCloseError() {
        this.setState({
            errorInfo: null
        });
    }

    handleFinalizarviaje(){
        const formattedRunningTime = new Date(this.state.runningTime).toISOString().slice(11, -1);
        this.setState(prevState => ({
            viajes_curso: prevState.viajes_curso.filter((c) => c.estado !== 'EN CURSO')
        }))
        this.state.viajes_curso.map((viaje_curso) =>
            ViajesApi.EndTravel(viaje_curso._id, formattedRunningTime, viaje_curso.id_vehiculo))
        clearInterval(this.timer);
        
    }

    handleCronometro(){
        //this.setState({runningTime: 0}) //reiniciar a cero cada vez que demos 'iniciar viaje'
        this.setState(state => {
          //if (this.state.status===true) {
          //  clearInterval(this.timer);
          //} else {
            const startTime = Date.now() - this.state.runningTime;
            this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime });
            });
          //}
          return { status: !state.status };
        });
      };

    render() {
        return(
            <div>
                <br></br>
                <Cronometro 
                status={this.state.status} 
                runningTime={this.state.runningTime} 
                handleCronometro={this.handleCronometro}
                />
            <br></br>
            <table class="table">
                
            <thead>
                <tr>
                    <th>id_cliente</th>
                    <th>id_vehiculo</th>
                    <th>estado</th>
                    <th>duracion</th>
                </tr>
            </thead>
            {this.state.viajes_curso.map((viaje_curso) =>
                <Viaje_curso 
                key={viaje_curso.id_vehiculo} 
                viaje_curso={viaje_curso} 
                FinalizarViaje={this.handleFinalizarviaje}
                handleCronometro={this.handleCronometro}
                />
            )}
            </table>
                
            </div>
        );
    }
}

export default ViajesCurso; 