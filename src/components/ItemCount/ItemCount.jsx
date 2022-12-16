import React, {useState} from 'react';
import Button from '../Button/Button';


function ItemCount({stock}) {
    const [cantidad, setCantidad] = useState(1)
    function handleIncrement () {
        if (cantidad < stock)
        setCantidad(cantidad+1)
    };
    function handleDecrement() {
        if (cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }


  return (
    <div>
        <Button onClick={handleIncrement}>+</Button>
        <p>{cantidad}</p>
        <Button onClick={handleDecrement}>-</Button>


    </div>
  )
}

export default ItemCount