import React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
function Cronometro(props) {
 
    const status = props.status;
    const runningTime  = props.runningTime;
    return (
      <div>
        <p>Tiempo transcurrido {runningTime}ms</p>
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