import { useState, createContext } from "react";

const cartContext = createContext();

export function CartContextProvider (props) {

    const [cart, setCart] = useState([]);

    function addToCart(itemData) {
        let itemFound = cart.find ( itemsInCart => itemsInCart.id === itemData.id )
        if (itemFound){
            let newCart = cart.map( itemsInCart => {
                if(itemsInCart.id === itemData.id) {
                itemsInCart.count += itemData.count;
                return itemsInCart;
                } else {
                 return itemsInCart;
                }
            });
            setCart(newCart);
        }
        else {
        const newCart = [...cart];
        newCart.push(itemData);
        setCart(newCart); 
        }
    }

    function totalItemsInCart (){
        let total=0;
        cart.forEach( itemsInCart => {
            total = total + itemsInCart.count;
        })
        return total;
    }

    /*function remoteItem (itemId){
        aca ver en mock service como se hizo, si el item hace match con el id del cart entonces lo removemos
    }*/

    /*function clear() {
        aca hacer un setCart y le pasamos un array vacio, asociar la funcion a un boton
        meter esta funcion y la de arroba en el valuea
    }*/

    const value = { 
        cart,
        addToCart,
        totalItemsInCart,
        };   

    return (
        <cartContext.Provider value={ value }>
            {props.children}
        </cartContext.Provider>
    );

}

export default cartContext;