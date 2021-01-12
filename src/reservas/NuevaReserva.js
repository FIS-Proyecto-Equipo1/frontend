import React from 'react';

class NuevaReserva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id_reservation: 0,
            id_vehicle: '', 
            id_client: 0,
            creation_datetime: 0,
            expiration_datetime: 0
        };
        this.addReservation = this.addReservation.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    addReservation(event){
        const id_reservation = event.target.name;
        const value = event.target.value;
        this.setState({
            [id_reservation]: value
        });
    }

    clickAdd(){
        this.props.onAddReservation(this.state);
        this.setState({
            id_reservation: 0,
            id_vehicle: '', 
            id_client: 0,
            creation_datetime: 0,
            expiration_datetime: 0
        });
    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="id_reservation" value = {this.state.id_reservation} onChange={this.addReservation}/></td>
                <td><select className="browser-default custom-select" name="id_vehicle" id="id_vehicle" value={this.state.id_vehicle} onChange={this.addReservation}>
                {/* <td><select className="browser-default custom-select" name="tipo" id="tipo" value={this.state.tipo} onChange={this.addReservation}>
                    <option value = "--">--</option>
                    <option value = "Moto">Moto</option>
                    <option value = "Coche" >Coche</option>
                    <option value = "Patin" >Patin</option>
                    <option value = "Bici" >Bici</option>
                </select></td> */}
                <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                </select></td>
                {/* <td><select className="browser-default custom-select" name="permiso" id="permiso" value={this.state.permiso} onChange={this.changeVehiculo}>
                    <option value = "--">--</option>
                    <option value = "AB">AB</option>
                    <option value = "B" >B</option>
                    <option value = "NO" >NO</option>
                    </select></td>
                <td><input class="form-control inputstl"  name="localizacion" value = {this.state.localizacion} onChange={this.changeVehiculo}/></td> */}
                
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Añadir Reserva</button></td>
            </tr>
        );
    }
}

export default NuevaReserva;