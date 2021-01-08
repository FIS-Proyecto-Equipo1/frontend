
class ViajesApi{
    static API_BASE_URL = "https://microservice-travel.herokuapp.com/api/v1";

    static requestHeaders(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return{
            headers
        }
    }

    static id_cliente = "235";

    static getAllTravels() {
        const headers = this.requestHeaders();
        const request = new Request(
            ViajesApi.API_BASE_URL 
            +"/travels/find?id_cliente=" 
            +this.id_cliente+"&estado=Finalizado",{
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getOnGoingTravels() {
        const headers = this.requestHeaders();
        const request = new Request(
            ViajesApi.API_BASE_URL+
            "/travels/find?id_cliente=235&estado=EN%20CURSO",{
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }   

    static EndTravel(_id) {
        //const data = {'estado': 'Finalizado'}
        const headers = this.requestHeaders();
        const request = new Request(ViajesApi.API_BASE_URL + "/travels/" + _id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({'estado': 'Finalizado'})
            //body: JSON.stringify(data)
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }   
}

export default ViajesApi;