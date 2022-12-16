
import React, {useState, useEffect} from 'react';
import {getSingleItemFromApi} from "../../mockService/mockService";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {

  const [product, setProduct] = useState([]);
  let params = useParams();
  let id = params.id


  useEffect( () => {
    getSingleItemFromApi(id).then((itemsDB) => {
       setProduct(itemsDB);
    });
  }, [id]);

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer;