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

    function totalPriceInCart(){
        let totalPrice = 0;
        cart.forEach((itemInCart) => {
            totalPrice = totalPrice + itemInCart.count * itemInCart.price;
        })
        return totalPrice;
    }

    
    function removeItem (itemId){
        /*aca ver en mock service como se hizo, si el item hace match con el id del cart entonces lo removemos*/
    }

    function clear() {
        setCart([])
    }

    const value = { 
        cart,
        addToCart,
        totalItemsInCart,
        removeItem,
        clear,
        totalPriceInCart,
        };   

    return (
        <cartContext.Provider value={ value }>
            {props.children}
        </cartContext.Provider>
    );

}

export default cartContext;