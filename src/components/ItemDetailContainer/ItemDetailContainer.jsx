
import React, {useState, useEffect} from 'react';
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import {getSingleItemFromApi} from "../../mockService/mockService";
import { useParams } from 'react-router-dom';

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
    <div>
        <FlexWrapper>
            <div>
                <div className="card">
                <div className="card-img">
                    <img src={product.thumbnail} alt="Product img"></img>
                </div>
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.detail}</p>
                    <h4 className="priceTag">${product.price}</h4>
                </div>
                </div>   
            </div>;
        </FlexWrapper>
    </div>
  )
}

export default ItemDetailContainer;