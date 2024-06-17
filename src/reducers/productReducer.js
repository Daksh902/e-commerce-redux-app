import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    ADD_PRODUCT,
  } from '../actions/productActions';
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return { ...state, loading: true };
      case GET_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case GET_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case EDIT_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload.product : product
          ),
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
        case ADD_PRODUCT:
          return {
            ...state,
            products: [...state.products, action.payload],
          };
      default:
        return state;
    }
  };
  
  export default productReducer;
  