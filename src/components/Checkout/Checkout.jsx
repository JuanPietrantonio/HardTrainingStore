import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div>
        <h1>Gracias por tu compra</h1>
        <Link to="/">
            <Button>Volver al catalogo</Button>
        </Link>
    </div>
  )
}

export default Checkout