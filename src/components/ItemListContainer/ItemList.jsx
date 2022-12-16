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
          product = {product}
          />
         ))
        }
        </FlexWrapper>
    </div>
    
)}

export default ItemList