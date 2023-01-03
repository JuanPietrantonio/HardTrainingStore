import React, { useContext }from 'react';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';

function CartView() {

    const { cart, removeItem } = useContext(cartContext);

    if (cart.length === 0 ) return <h1>Carrito Vacio</h1>;


  return (
    <div>
        <h1>Este es el contenido de tu carrito</h1>
        {cart.map( cartItem=> (
            <div>
                <img src={cartItem.thumbnail} alt={cartItem.title}/>
                <h3>{cartItem.title}</h3>
                <h4> ${cartItem.price} </h4>
                <h4> Cantidad: {cartItem.count} </h4>
                <Button onClick={()=>{removeItem(cartItem.id)}}>X</Button>
            </div>
        ))
        }
    </div>
    
  )
}

export default CartView