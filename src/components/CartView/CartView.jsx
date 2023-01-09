import React, { useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import { createBuyOrderFirestore } from '../../services/firebase';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import BuyForm from './BuyForm';

function CartView() {

    const { cart, removeItem, clear, totalPriceInCart } = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0 ) return <h1>Carrito Vacio</h1>;


    function createBuyOrder(userData){  
      const buyData = {
        buyer : userData,
        items : cart,
        total : totalPriceInCart(),
        date : new Date()
      }
      createBuyOrderFirestore(buyData).then ( orderId => {
        alert(`Gracias por tu compra, tu id es: ${orderId}` )
      });
      clear();
      navigate("/checkout/");   
    }
  
    

  return (
    <div>
        <h1>Tus compras</h1>
        {cart.map( cartItem=> (
            <div key={cartItem.id}>
                <img src={cartItem.thumbnail} alt={cartItem.title}/>
                <h3>{cartItem.title}</h3>
                <h4> ${cartItem.price} </h4>
                <h4> Cantidad: {cartItem.count} </h4>
                <Button onClick={()=>{removeItem(cartItem.id)}}>X</Button>
            </div>
        ))
        }
        <h4>Total: {totalPriceInCart()}</h4>
        <Button onClick={clear}>Vaciar Carrito</Button>
        

        <BuyForm onSubmit={createBuyOrder}/>
    </div>
    
  )
}

export default CartView