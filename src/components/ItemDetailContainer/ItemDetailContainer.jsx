
import React, {useState, useEffect} from 'react';
import {getSingleItemFromApi} from "../../services/firebase";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './itemDetailContainer.css';
import FlexWrapper from '../FlexWrapper/FlexWrapper';



function ItemDetailContainer() {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();
  let id = params.id


  useEffect( () => {
    getSingleItemFromApi(id).then((itemsDB) => {
       setProduct(itemsDB);
       setIsLoading(false)
    })
    .catch( (error) => {
      console.error(error)
      setIsLoading(false);
      })
      .finally( ()=> setIsLoading(false) )
  }, [id]);

  if (isLoading) return <h1>Cargando...</h1>;


  return (
    <FlexWrapper>
      <ItemDetail product={product} className= "itemDetailContainer"  />
      </FlexWrapper>
  )
}

export default ItemDetailContainer;