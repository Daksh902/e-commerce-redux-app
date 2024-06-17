import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productActions';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  
  // Fetch products from the Redux store
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  
  // State to manage sorted products
  const [sortedProducts, setSortedProducts] = useState([]);

  // Fetch products when component mounts
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Update sorted products when products state changes
  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  // Handler to sort products by price
  const handleSort = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  // Handler to remove sorting
  const handleRemoveSort = () => {
    setSortedProducts(products);
  };

  // Display loading state
  if (loading) return <div>Loading...</div>;
  
  // Display error state
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <div className="sort-button-container">
        <button className="sort-button" onClick={handleSort}>Sort by Price</button>
        <button className="remove-sort-button" onClick={handleRemoveSort}>Remove Sort</button>
      </div>
      
      {/* Render the list of products */}
      {sortedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
