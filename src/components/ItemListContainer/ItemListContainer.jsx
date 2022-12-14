import ItemList from "./ItemList";
import React, {useState, useEffect} from 'react';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import getItemsFromApi from "../../mockService/mockService";

function ItemListContainer() {

  const [productList, setProductList] = useState([]);

  useEffect( () => {
    getItemsFromApi().then((itemsDB) => {
      console.log(itemsDB); 
      setProductList(itemsDB);
    });
  }, []);

  return (
    <div>
        <FlexWrapper>
          <ItemList productList={productList}/>
        </FlexWrapper>
    </div>
  )
}

export default ItemListContainer