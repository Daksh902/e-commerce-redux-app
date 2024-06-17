// cartActions.js

export const addToCart = (product) => {
  console.log('Adding to cart:', product);
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId
});

export const increaseQuantity = (productId) => ({
  type: 'INCREASE_QUANTITY',
  payload: productId
});

export const decreaseQuantity = (productId) => ({
  type: 'DECREASE_QUANTITY',
  payload: productId
});