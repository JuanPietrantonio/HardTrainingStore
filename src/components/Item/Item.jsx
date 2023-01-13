import "./item.css";
import Button from "../Button/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Item({product}) {

    const [ isFavorite, setIsfavorite] = useState(false);
    function handleFavorite () {
        setIsfavorite(!isFavorite);
    }
    let classButtonFavorite = isFavorite === true ? "card-favicon favorite" : "card-favicon";

    let urlDetail= `/detalle/${product.id}`;

    return (
        <div className="card">
            <button onClick={handleFavorite} className={classButtonFavorite}>♡</button>
            <div className="card-img">
                <img src={product.thumbnail} alt="Product img"></img>
            </div>
            <div className="card-description">
                <h2>{product.title}</h2>
                <p>{product.detail}</p>
                <h4 className="priceTag">${product.price}</h4>
                <Link to={ urlDetail }>
                    <Button className="btn">Detalle</Button>
                </Link>
            </div>
        </div>
    )
}

export default Item;