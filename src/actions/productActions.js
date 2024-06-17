import axios from 'axios';

// Action Types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';

// API URL
const API_URL = 'https://my-json-server.typicode.com/Daksh902/E-commerce/products';

// Fetch products from the API
export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: error.message });
  }
};

// Add a new product to the API
export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, product);
    dispatch({ type: ADD_PRODUCT, payload: response.data });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw new Error('Failed to add product');
  }
};

// Edit an existing product in the API
export const editProduct = (id, product) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/${id}`, product);
    dispatch({ type: EDIT_PRODUCT, payload: { id, product } });
  } catch (error) {
    console.error('Error editing product:', error);
  }
};

// Delete a product from the API
export const removeProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
