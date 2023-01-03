import React from 'react';
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';


function ItemList(props) {
  let emptyArray = props.productList.length === 0;


  return (
    <div>
         <FlexWrapper>
        {
        emptyArray ? 
        <h1>Cargando...</h1>
        :
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