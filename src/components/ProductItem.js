import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct, removeProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    image: product.image,
    price: product.price,
    rating: product.rating,
    description: product.description,
  });

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editProduct(product.id, updatedProduct));
      alert('Product updated successfully!');
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(removeProduct(product.id));
    alert('Product deleted successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className="star">{i <= rating ? '★' : '☆'}</span>);
    }
    return stars;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-item-image" />
      <div className="product-item-details">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleInputChange}
              className="product-item-input"
              placeholder="Product Name"
            />
            <input
              type="text"
              name="image"
              value={updatedProduct.image}
              onChange={handleInputChange}
              className="product-item-input"
              placeholder="Image URL"
            />
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
              className="product-item-input"
              placeholder="Price"
            />
            <input
              type="number"
              name="rating"
              value={updatedProduct.rating}
              onChange={handleInputChange}
              className="product-item-input"
              placeholder="Rating (1-5)"
            />
            <textarea
              name="description"
              value={updatedProduct.description}
              onChange={handleInputChange}
              className="product-item-input"
              placeholder="Description"
            />
          </>
        ) : (
          <>
            <h2 className="product-item-name">{product.name}</h2>
            <span className="product-item-price">₹{product.price}</span>
            <div className="product-item-rating">{renderStars(product.rating)}</div>
            <div className="product-item-description">{product.description}</div>
          </>
        )}
        <div className="product-item-buttons">
          <button className="product-item-button edit" onClick={handleEdit}>
            {isEditing ? '✔️ Save' : '✏️ Edit'}
          </button>
          <button className="product-item-button delete" onClick={handleDelete}>
            {'❌ Delete'}
          </button>
          <button className="product-item-button add-to-cart" onClick={handleAddToCart}>
            {'🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
