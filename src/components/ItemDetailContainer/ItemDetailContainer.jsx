
import React, {useState, useEffect} from 'react';
import {getSingleItemFromApi} from "../../services/firebase";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './itemDetailContainer.css';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import { ThreeDots } from 'react-loader-spinner';



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

  if (isLoading) return 
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


  return (
    <FlexWrapper>
      <ItemDetail product={product} className= "itemDetailContainer"  />
      </FlexWrapper>
  )
}

export default ItemDetailContainer;