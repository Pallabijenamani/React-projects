/* eslint-disable no-unused-vars */
import React from 'react';
import './styles.css';  
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>E-Commerce Shop</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
