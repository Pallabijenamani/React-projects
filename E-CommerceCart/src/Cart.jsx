/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
              <span>${product.price}</span>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
