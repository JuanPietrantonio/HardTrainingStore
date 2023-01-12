import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './storage/CartContext';
import CartView from './components/CartView/CartView';



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
          <Routes>
              <Route path="/" element={ <ItemListContainer /> } />
              <Route path="/category/:categoryid" element={ <ItemListContainer /> } />
              <Route path="/detalle/:id" element={ <ItemDetailContainer /> } />
              <Route path="/cart" element={ <CartView/> } />
              <Route path="/checkout" element={ <h1>Gracias por tu compra</h1> } />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
