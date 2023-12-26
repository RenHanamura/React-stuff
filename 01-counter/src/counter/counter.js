import {useState} from 'react';

function Counter() {
    let [cuenta, setCuenta] = useState(0);
    return (
        <div>
            <p>
                Haz pulsado este boton {cuenta} veces
            </p>
            <button onClick={() => setCuenta(cuenta +1)}>+1</button>
        </div>
    );
}

export default Counter;