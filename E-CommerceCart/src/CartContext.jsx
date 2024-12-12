/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useContext } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart
export const useCart = () => useContext(CartContext);
