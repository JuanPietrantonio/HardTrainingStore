import React, {useState} from 'react';
import Button from '../Button/Button';


function ItemCount({stock, onAddToCart, text}) {
    const [count, setCountd] = useState(1)
    function handleAdd (evt) {
        if (count < stock)
        setCountd(count+1)
    };
    function handleSubstract(evt) {
        if (count > 1) {
            setCountd(count-1)
        }
    }
    


  return (
    <div>
        <Button onClick={handleAdd}>+</Button>
        <p>{count}</p>
        <Button onClick={handleSubstract}>-</Button>

        <Button onClick={ ()=> onAddToCart(count)}>{text}</Button>
    </div>
  )
}

export default ItemCount