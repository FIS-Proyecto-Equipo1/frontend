class ReservasApi {
    static API_BASE_URL = "https://urbanio-reservas.herokuapp.com/api/v1";

    static requestHeaders(){
        return {}
    }

    static getReservas(){
        const headers = this.requestHeaders();
        const request = new Request(ReservasApi.API_BASE_URL + "/reservas", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
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
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        const requestOptions = {
            method: 'DELETE',
            headers: headers
        };
        fetch(ReservasApi.API_BASE_URL + "/reservas/" + id_reservation, requestOptions);
    }
    
    static postReserva(reserva){
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        return fetch(ReservasApi.API_BASE_URL + "/reservas", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                id_reservation: reserva.id_reservation,
                id_vehicle: reserva.id_vehicle, 
                id_client: reserva.id_client, 
                creation_datetime: reserva.creation_datetime, 
                expiration_datetime: reserva.expiration_datetime
            })
        }).then(response => {
            console.log(response);
            return response.json();
        });
    }

    static desbloqueaVehiculo(id_reservation){
        const headers = {
            Accept: 'application/json', 'Content-Type': 'application/json'
        };
        
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