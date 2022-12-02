import Item from "../Item/Item";

import React from 'react'
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemListContainer() {
  return (
    <div>
        <FlexWrapper>
                <Item title="algo" imgurl="https://http2.mlstatic.com/D_NQ_NP_630166-MLA45787954825_052021-O.webp" price="100" detail="detalles"></Item>
                <Item title="algo12" price="200" detail="detalles"></Item>
                <Item title="algo23" price="300" detail="detalles"></Item>
                <Item title="algo234" price="300" detail="detalles"></Item>
        </FlexWrapper>
    </div>
  )
}

export default ItemListContainer