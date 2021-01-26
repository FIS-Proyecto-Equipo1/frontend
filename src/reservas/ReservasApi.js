import axios from 'axios';

class ReservasApi {
    static API_BASE_URL = "https://urbanio.herokuapp.com/api/v1";

    static requestHeaders(){
        return {
            'Authorization':'Bearer '+window.localStorage.getItem("token"),
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    }

    static getReservas(){
        const headers = this.requestHeaders();
        // const request = new Request(ReservasApi.API_BASE_URL + "/reservas", {
        //     method: 'GET',
        //     headers: headers
        // });

        return axios.get(ReservasApi.API_BASE_URL + "/reservas", {headers: headers})
    }

    static getReserva(id_reservation){
        const headers = this.requestHeaders();
        const request = new Request(ReservasApi.API_BASE_URL + "/reservas/" + id_reservation, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }

    static deleteReserva(id_reservation){
        const headers = this.requestHeaders();
        const requestOptions = {
            method: 'DELETE',
            headers: headers
        };
        return fetch(ReservasApi.API_BASE_URL + "/reservas/" + id_reservation, requestOptions).then(response => {
            console.log(response);
            return response.json();
        });
    }
    
    static postReserva(reserva){
        const headers = this.requestHeaders();
        return fetch(ReservasApi.API_BASE_URL + "/reservas", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                id_vehicle: reserva.id_vehicle, 
                destination: reserva.destination
            })
        }).then(response => {
            console.log(response);
            return response.json();
        });
    }

    static desbloqueaVehiculo(id_reservation){
        const headers = this.requestHeaders();
        
        return fetch(ReservasApi.API_BASE_URL + "/reservas/" + id_reservation + "/desbloquear-vehiculo", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                // TODO: obtener vehiculo a traves del id_vehiculo de la reserva indicada 
                // y cambiarle el estado
        })}).then(response => {
            console.log(response);
            return response.json();
        });
    }
}

export default ReservasApi;