// CartPage.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions/cartActions';
import '../styles/CartPage.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    alert('Product removed from cart successfully!');
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className="star">{i <= rating ? '★' : '☆'}</span>);
    }
    return stars;
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <span className="cart-item-price">₹{item.price}</span>
              <div className="cart-item-rating">{renderStars(item.rating)}</div>
              <div className="cart-item-quantity">
                <button className="quantity-button" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button className="quantity-button" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <div className="cart-item-total-price">
                Total: ₹{(item.price * item.quantity).toFixed(2)}
              </div>
              <button className="cart-item-remove" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
