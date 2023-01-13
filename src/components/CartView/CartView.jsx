import React, { useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import { createBuyOrderFirestore } from '../../services/firebase';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import BuyForm from './BuyForm';
import "./cartview.css";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function CartView() {

    const { cart, removeItem, clear, totalPriceInCart } = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0 ) return (
    <div>
      <h1>Carrito Vacio</h1>;
      <Link to="/">
            <Button>Volver al catalogo</Button>
      </Link>
    </div>)

    function createBuyOrder(userData){  
      const buyData = {
        buyer : userData,
        items : cart,
        total : totalPriceInCart(),
        date : new Date()
      }
      createBuyOrderFirestore(buyData).then ( orderId => {
        Swal.fire(
          'Gracias por tu compra',
          `Tu id de seguimiento es: ${orderId}`,
          'success'
        )
      });
      clear();
      navigate("/checkout/");   
    }
  
    

  return (
    <div>
        <h1>Tus compras</h1>
        {cart.map( cartItem=> (
            <div key={cartItem.id} className="cart-item">
                <img src={cartItem.thumbnail} alt={cartItem.title}/>
                <h3>{cartItem.title}</h3>
                <h4> ${cartItem.price} </h4>
                <h4> Cantidad: {cartItem.count} </h4>
                <Button className='cart-button' onClick={()=>{removeItem(cartItem.id)}} >X</Button>
            </div>
        ))
        }
        <h3>Total: ${totalPriceInCart()}</h3>
        <Button onClick={clear}>Vaciar Carrito</Button>
        

        <BuyForm onSubmit={createBuyOrder}/>
    </div>
    
  )
}

export default CartView