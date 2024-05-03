import React from 'react';
import './Product.css';

function Product({ name, description, price }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
