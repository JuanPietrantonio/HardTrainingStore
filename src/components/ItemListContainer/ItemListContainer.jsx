import Item from "../Item/Item";

import React from 'react'
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import products from "../../data/products";

function ItemListContainer() {
  return (
    <div>
        <FlexWrapper>
          {
            products.map ( (product) => (
                <Item
                  key = {product.id}
                  imgurl = {product.thumbnail}
                  title = {product.title}
                  price = {product.price}
                  detail = {product.description}
                />
              ))
          }
        </FlexWrapper>
    </div>
  )
}

export default ItemListContainer