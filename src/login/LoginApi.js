
import { useHistory } from "react-router-dom";
class LoginApi {
    //static API_BASE_URL = "https://fis-2020-vehicles.herokuapp.com/api/v1";
    // static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://urbanio-autenticacion.herokuapp.com/api/v1";
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
    
    static postUser(){        
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        

        return fetch(LoginApi.API_BASE_URL + "/login", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value
            }),
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            window.localStorage.setItem("token",responseData.token);

            
        });
    }
}

export default LoginApi;