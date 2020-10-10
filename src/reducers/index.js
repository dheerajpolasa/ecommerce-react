import {
  ADD_PRODUCTS,
  ADD_PRODUCT_TO_STORE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions";

const initialProductsState = {
  products: [],
  cart: [],
};
export default function products(state = initialProductsState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.product.id),
      };
    case ADD_PRODUCT_TO_STORE:
      return {
        ...state,
        products: [
          { ...action.product, id: state.products.length + 1 },
          ...state.products,
        ],
      };
    default:
      return state;
  }

  //   return state;
}
