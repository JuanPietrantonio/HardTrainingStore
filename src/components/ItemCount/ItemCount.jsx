import React, {useState} from 'react';


function ItemCount(product) {
    const [cantidad, setCantidad] = useState(product.stock)
    function handleIncrement () {
        setCantidad(cantidad+1)
    };
    function handlekDecrement() {
        if (cantidad > product.stock) {
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

export default ItemCount