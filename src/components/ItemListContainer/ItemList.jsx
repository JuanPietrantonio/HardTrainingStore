import React from 'react';
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';


function ItemList(props) {
  return (
    <div>
         <FlexWrapper>
        {
        props.productList.map ( (product) => (
        <Item
          key = {product.id}
          imgurl = {product.thumbnail}
          title = {product.title}
          price = {product.price}
          detail = {product.description}
          stock = {product.stock}
          />
         ))
        }
        </FlexWrapper>
    </div>
    
)}

export default ItemList