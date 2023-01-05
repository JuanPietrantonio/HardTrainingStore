import React, {useState, useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import cartContext from '../../storage/CartContext';
import { Link } from 'react-router-dom';




function ItemDetail({product}) {

    const [isInCart, setIsInCart] = useState(false);
    


    const { cart, addToCart } = useContext(cartContext);

    let itemInCart = cart.find( item => product.id === item.id)
    let stock = product.stock;
    if (itemInCart) stock -=itemInCart.count;

    function onAddToCart(count){
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
            {!isInCart ? (
                <ItemCount onAddToCart={onAddToCart} stock={stock} text="Agregar al carrito"></ItemCount>
              )  : (
                <div>
                    <Link to= "/cart">
                        <button>Ir al carrito</button>
                    </Link>
                    <button>Volver al catalogo</button>
                    <button>Quitar del carrito</button>
                </div>
              )}
            </div>   
        </div>
    )
}

export default ItemDetail