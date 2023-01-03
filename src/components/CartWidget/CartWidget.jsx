import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';

function CartWidget(props) {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>
      <div>🛒</div>
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