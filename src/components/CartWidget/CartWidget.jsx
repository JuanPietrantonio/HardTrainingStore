import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';
import { Link } from 'react-router-dom';
import "./cartwidget.css";

function CartWidget(props) {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>
      <Link to= "/cart" className='cart'>🛒</Link>
      {
      totalItemsInCart() > 0 ? 
      <span>{totalItemsInCart()}</span>
      :
      <></>
      }
    </div>
  )
}

export default CartWidget;