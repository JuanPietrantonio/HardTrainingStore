import React from 'react'
import ItemCount from '../ItemCount/ItemCount'




function itemDetail({product}) {

    function onAddToCart(count){
        alert(`Agregadas ${count} unidades de ${product.title} al carrito`)
    }

    return (
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
            <ItemCount onAddToCart={onAddToCart} stock={product.stock} text="Agregar al carrito"></ItemCount>
            </div>   
        </div>
    )
}

export default itemDetail