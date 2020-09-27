import products from "../reducers";

export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function fetchProducts() {
  return (dispatch) => {
    const url = `https://my-json-server.typicode.com/dheerajpolasa/ecommerce-react/products`;
    console.log("URL ", url);
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(addProducts(data));
      });
  };
}

export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products: products,
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}
