class LoginApi {
    //static API_BASE_URL = "https://fis-2020-vehicles.herokuapp.com/api/v1";
    static API_BASE_URL = "https://urbanio-autenticacion.herokuapp.com/api/v1";

    static requestHeaders(){
        return {}
    }

    // static getAllVehicles(){
    //     const headers = this.requestHeaders();
    //     const request = new Request(LoginApi.API_BASE_URL + "/login", {
    //         method: 'GET',
    //         headers: headers
    //     });

    //     return fetch(request).then(response => {
    //         return response.json();
    //     })
    // }
    
    static postUser(username, password){
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        return fetch(LoginApi.API_BASE_URL + "/login", {
            method: 'POST',
            headers: headers,
            body: {},
        }).then(response => {
            console.log(response);
            return response.json();
        });
    }


}

export default LoginApi;