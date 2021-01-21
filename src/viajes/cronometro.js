import React from 'react';
 
function Cronometro(props) {
 
    const status = props.status;
    const formattedRunningTime = new Date(props.runningTime).toISOString().slice(11, -1);

    return (
      <div>
        <table>
        <thead>
            <tr>
              <th>Tiempo de viaje transcurrido {formattedRunningTime}</th>
            </tr>
          </thead>
        </table>
      </div>
    );
}

export default Cronometro;

