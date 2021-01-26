class ViajesApi{
    static API_BASE_URL = "https://urbanio.herokuapp.com/api/v1"; //api_gateway
    //static API_BASE_URL = "https://microservice-travel.herokuapp.com/api/v1";
    //static API_BASE_URL = "http://localhost:4000/api/v1"; //local
   //static id_cliente = window.localStorage.getItem('user');
   static id_cliente = "5ffaf5695dc3ce0fa81f16b2";
   static token = window.localStorage.getItem('token');

    static requestHeaders(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return{
            headers
        }
    }

    static getAllTravels() {
        const headers = this.requestHeaders();
        const request = new Request(
            ViajesApi.API_BASE_URL 
            +"/travels/find?id_cliente=" 
            +this.id_cliente+"&estado=FINALIZADO",{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getOnGoingTravels() {
        const headers = this.requestHeaders();
        const request = new Request(
            ViajesApi.API_BASE_URL+
            "/travels/find?id_cliente="
            +this.id_cliente+
            "&estado=EN%20CURSO",{
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }   

    static EndTravel(_id, duracion, id_vehiculo, id_cliente) {
        const headers = this.requestHeaders();
        const request = new Request(ViajesApi.API_BASE_URL + "/travels/" + _id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
                },
            body: JSON.stringify({
                'estado': 'FINALIZADO',
                'duracion': duracion,
                'id_vehiculo': id_vehiculo,
                'id_cliente': id_cliente
            })
            //body: JSON.stringify(data)
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }   

    static UpdateTravelDuration(_id, duracion) {
        const headers = this.requestHeaders();
        const request = new Request(ViajesApi.API_BASE_URL + "/travels/" + _id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
                },
            body: JSON.stringify({'duracion': duracion})
            //body: JSON.stringify(data)
        });

        return fetch(request).then(response => {
            return response.json();
        });
    } 

    static DeleteTravel(_id){
        const headers = this.requestHeaders();
        const request = new Request(ViajesApi.API_BASE_URL + "/travels/" + _id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + this.token
                }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getAllTravelsAdmin() {
        const headers = this.requestHeaders();
        const request = new Request(
            ViajesApi.API_BASE_URL 
            +"/travels",{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        });
        return fetch(request).then(response => {
            return response.json();
        });
    }

}
export default ViajesApi;