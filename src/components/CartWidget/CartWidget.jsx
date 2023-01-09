import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';
import { Link } from 'react-router-dom';

function CartWidget(props) {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>
      <Link to= "/cart">🛒</Link>
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