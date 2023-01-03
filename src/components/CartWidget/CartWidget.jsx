import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';

function CartWidget(props) {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>{props.children}{totalItemsInCart()}</div>
  )
}

export default CartWidget;