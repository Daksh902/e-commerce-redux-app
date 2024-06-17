import React from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image"/>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
