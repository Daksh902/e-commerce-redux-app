import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage'; // Corrected import
import CartPage from './pages/CartPage';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/add-product" element={<AddProductPage />} /> {/* Corrected route */}
      <Route path="/cart" element={<CartPage />} /> {/* Corrected route */}
    </Routes>
  );
}

export default App;
