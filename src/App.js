import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
