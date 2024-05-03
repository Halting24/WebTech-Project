import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const products = [
  { id: 1, name: "High-End CPU", description: "Latest and greatest in processing power.", price: "499" },
  { id: 2, name: "Gaming GPU", description: "Top-tier graphics performance for gamers.", price: "799" },
  { id: 3, name: "SSD Storage", description: "Fast and reliable SSDs.", price: "199" }
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
