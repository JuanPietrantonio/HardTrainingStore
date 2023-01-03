import React from 'react';
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Loader from '../Loader/Loader';


function ItemList(props) {
  let emptyArray = props.productList.length === 0;


  return (
    <div>
         <FlexWrapper>
        {
        emptyArray ? 
        <Loader color="green"/>
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