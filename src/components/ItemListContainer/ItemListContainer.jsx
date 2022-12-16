import ItemList from "./ItemList";
import React, {useState, useEffect} from 'react';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import getItemsFromApi, { getItemsFromApiByCategory } from "../../mockService/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [productList, setProductList] = useState([]);
  const {categoryid} = useParams();

  useEffect( () => {
    if (categoryid)
     getItemsFromApiByCategory(categoryid).then((itemsDB) => {
      setProductList(itemsDB);
    });
    else 
      getItemsFromApi().then((itemsDB) => {
        setProductList(itemsDB);
    });
   }, [categoryid]);

  return (
    <div>
        <FlexWrapper>
          <ItemList productList={productList}/>
        </FlexWrapper>
    </div>
  )
}

export default ItemListContainer

