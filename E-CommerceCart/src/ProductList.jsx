/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from './CartContext';

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Product 1', price: 25, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: 40, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', price: 55, image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', price: 80, image: 'https://via.placeholder.com/200' },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
