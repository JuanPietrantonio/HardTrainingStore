import React from 'react';
import Item from '../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import { ThreeDots } from 'react-loader-spinner';


function ItemList(props) {
  let emptyArray = props.productList.length === 0;


  return (
    <div>
         <FlexWrapper>
        {
        emptyArray ? 
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="grey" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
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