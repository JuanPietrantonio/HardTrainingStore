import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import cartContext from '../../storage/CartContext';




function ItemDetail({product}) {

    const [isInCart, setIsInCart] = useState(false);
    const { addToCart } = useContext(cartContext);

    function onAddToCart(count){
        alert(`Agregadas ${count} unidades de ${product.title} al carrito`);
        setIsInCart(true);

        const itemForCart = {
            ...product,
            count,
        };

        addToCart(itemForCart)
        setIsInCart(true);

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
            {isInCart ? (
                <button>Ir al carrito</button>
              )  : (
                <ItemCount onAddToCart={onAddToCart} stock={product.stock} text="Agregar al carrito"></ItemCount>
              )}
            </div>   
        </div>
    )
}

export default ItemDetail