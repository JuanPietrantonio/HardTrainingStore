import "./item.css";
import Button from "../Button/Button";
import React, { useState } from "react";


function Item(props) {

    const [ isFavorite, setIsfavorite] = useState(false);
    function handleFavorite () {
        setIsfavorite(!isFavorite);
    }
    let classButtonFavorite = isFavorite === true ? "card-favicon favorite" : "card-favicon";

    return (
        <div className="card">
            <button onClick={handleFavorite} className={classButtonFavorite}>♡</button>
            <div className="card-img">
                <img src={props.imgurl} alt="Product img"></img>
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <h4 className="priceTag">${props.price}</h4>
                <Button className="btn">Detalle</Button>
            </div>
        </div>
    )
}

export default Item;