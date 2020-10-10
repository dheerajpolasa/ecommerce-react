import { store as notifyStore } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const ADD_PRODUCT_TO_STORE = "ADD_PRODUCT_TO_STORE";

export function fetchProducts() {
  return (dispatch) => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) throw new Error("Not found");
      const persisitedState = JSON.parse(serializedState);
      dispatch(addProducts(persisitedState.products));
      return;
    } catch (err) {
      console.log(err);
    }
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

export function addProductToStore(product) {
  return {
    type: ADD_PRODUCT_TO_STORE,
    product,
  };
}

export function notifyMissing(message) {
  notifyStore.addNotification({
    title: "Property Required!",
    message: message,
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}

export function notifySuccess(message) {
  notifyStore.addNotification({
    title: "Success!",
    message: message,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}

export function notifyDeleted(message) {
  notifyStore.addNotification({
    title: "Deleted",
    message: message,
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}

export function notifyInfo(message) {
  notifyStore.addNotification({
    title: "For you information",
    message: message,
    type: "info",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
}
