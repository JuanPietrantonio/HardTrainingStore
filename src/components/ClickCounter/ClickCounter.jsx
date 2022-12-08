import React, {useState} from 'react';


function ClickCounter(props) {
    const [cantidad, setCantidad] = useState(1)
    function handleIncrement () {
        setCantidad(cantidad+1)
    };
    function handlekDecrement() {
        if (cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }


  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <p>{cantidad}</p>
        <button onClick={handlekDecrement}>-</button>


    </div>
  )
}

export default ClickCounter