import React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
function Cronometro(props) {
 
    const status = props.status;
    const formattedRunningTime = new Date(props.runningTime).toISOString().slice(11, -1);

    return (
      <div>
        <p>Tiempo transcurrido {formattedRunningTime}ms</p>
        <button className="btn btn-primary" onClick={()=> props.handleCronometro()}>{status ? 'Stop' : 'Start'}</button>
      </div>
    );
}

export default Cronometro;


/*
function Cronometro(props) {
    return (
        <div>
          <p>Tiempo transcurrido: {props.runningTime}</p>
        </div>
      );
}

export default Cronometro;
*/