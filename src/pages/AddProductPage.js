// AddProductPage.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';
import AddProductForm from '../components/AddProductForm';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = async (productData) => {
    try {
      const addedProduct = await dispatch(addProduct(productData));
      console.log('Added product:', addedProduct);
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error (optional)
    }
  };

  return (
    <div>
      <h1>Add Product Page</h1>
      <AddProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
