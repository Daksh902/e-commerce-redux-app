import React from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  );

  return (
    <div>
      <Navbar />
      {product ? <ProductDetail product={product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ProductDetailPage;
