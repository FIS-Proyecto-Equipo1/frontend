import React from 'react';
import moment from 'moment';

function Reserva(props){
    return (
        <tr>
            <td>{props.reserva._id}</td>
            <td>{props.reserva.id_vehicle}</td>
            <td>{props.reserva.id_client}</td>
            <td>{props.reserva.status}</td>
            <td>{ moment(props.reserva.creation_datetime)
            .local()
            .format("DD-MM-YYYY hh:mm:ss a")}</td>
            <td>{moment(props.reserva.expiration_datetime)
            .local()
            .format("DD-MM-YYYY hh:mm:ss a")}</td>
            <td>
                
                     {  props.reserva.status ==='RESERVADA' && props.rol == "USER" ? 
                        <div>
                            <button className="btn btn-primary" onClick={() => props.onDesbloquear(props.reserva)}>Desbloquear</button>
                            <button className="btn btn-primary" onClick={() => props.onDelete(props.reserva)}>Cancelar</button>
                        </div> 
                        : ''
                    }   
                    {
                        props.reserva.status !=='RESERVADA' && props.rol == "ADMIN" ? 
                        <div><button className="btn btn-primary" onClick={() => props.onDelete(props.reserva)}>Eliminar</button> </div>
                        : ''
                    }
                    
            </td>
        </tr>
    );
}

export default Reserva;