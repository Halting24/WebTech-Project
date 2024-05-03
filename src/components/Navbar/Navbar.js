import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <h1>MainframeMasters</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/checkout">Checkout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
