class VehiculosApi {
    //static API_BASE_URL = "https://fis-2020-vehicles.herokuapp.com/api/v1";
    static API_BASE_URL = "https://urbanio.herokuapp.com/api/v1";

    static requestHeaders(){
        return {}
    }

    static getAllVehicles(){
        const request = new Request(VehiculosApi.API_BASE_URL + "/vehicles", {
            method: 'GET',
            headers: this.requestHeaders()
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }

    static deleteVehicle(matricula){
        let currentRol=window.localStorage.getItem("rol");
        const headers = {
            'Authorization':'Bearer '+window.localStorage.getItem("token"),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'rol':currentRol
        };
        console.log("Deleting: "+matricula);
        const requestOptions = {
            method: 'DELETE',
            headers: headers
        };
        fetch(VehiculosApi.API_BASE_URL + "/vehicles/"+matricula,requestOptions);
    }
    
    static postVehicle(vehiculo){
        let currentRol=window.localStorage.getItem("rol");
        const headers = {
            'Authorization':'Bearer '+window.localStorage.getItem("token"),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'rol':currentRol
        };
        return fetch(VehiculosApi.API_BASE_URL + "/vehicles", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                matricula: vehiculo.matricula,
                tipo: vehiculo.tipo, 
                estado: vehiculo.estado, 
                permiso: vehiculo.permiso, 
                localizacion: vehiculo.localizacion
        })}).then(response => {
            console.log(response);
            return response.json();
        });
    }
    static updateVehicle(vehiculo){
        let currentRol=window.localStorage.getItem("rol");
        const headers = {
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization':'Bearer '+window.localStorage.getItem("token"),
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'rol':currentRol
        };
        // const formData = new URLSearchParams();
        // const formData =[
        //     {"key":"matricula","value":"x","type":"text","enabled":true},
        //     {"key":"tipo","value":"x","type":"text","enabled":true},
        //     {"key":"estado","value":"x","type":"text","enabled":true},
        //     {"key":"permiso","value":"x","type":"text","enabled":true},
        //     {"key":"localizacion","value":"x","type":"text","enabled":true}
        // ]
        console.log(vehiculo);
        return fetch(VehiculosApi.API_BASE_URL + "/vehicles/"+vehiculo.matricula, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                matricula: vehiculo.matricula,
                tipo: vehiculo.tipo, 
                estado: vehiculo.estado, 
                permiso: vehiculo.permiso, 
                localizacion: vehiculo.localizacion
        })}).then(response => {
            console.log(response);
            return response.json();
        });
    }
}

export default VehiculosApi;