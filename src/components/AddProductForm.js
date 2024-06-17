import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';
import Notification from './Notification';
import '../styles/AddProductForm.css';

const AddProductForm = () => {
  // State for managing product details input
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    image: ''
  });
  
  // State for managing notification message
  const [notification, setNotification] = useState('');
  const dispatch = useDispatch();

  // Handler for input changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch addProduct action
      await dispatch(addProduct(product));
      
      // Reset product form
      setProduct({
        name: '',
        description: '',
        price: '',
        rating: '',
        image: ''
      });
      
      // Set success notification
      setNotification('Product added successfully!');
    } catch (error) {
      // Set error notification
      setNotification('Failed to add product. Please try again.');
    }
  };

  // Handler to close the notification
  const handleCloseNotification = () => {
    setNotification('');
  };

  return (
    <div className="add-product-container">
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="description" value={product.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price</label>
          <div className="price-input-container">
            <span className="rupee-symbol">₹</span>
            <input type="number" name="price" value={product.price} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input type="number" name="rating" value={product.rating} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" name="image" value={product.image} onChange={handleChange} required />
        </div>
        <button type="submit" className="add-button">Add</button>
      </form>
      {notification && (
        <Notification message={notification} onClose={handleCloseNotification} />
      )}
    </div>
  );
};

export default AddProductForm;
