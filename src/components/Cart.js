import React from "react";
import Product from "./Product";
const Cart = (props) => {
  const { cart } = props.store.getState();
  const { dispatch } = props.store;
  return (
    <div style={styles.cards}>
      {cart.map((product, index) => {
        return (
          <Product
            product={product}
            key={`product-${index}`}
            dispatch={dispatch}
            isAddedToCart="true"
          />
        );
      })}
      {cart.length === 0 ? (
        <div style={styles.emptyState}>
          <span style={styles.imageText}>No products in the cart!</span>
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  cards: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptyState: {
    background: `url("https://cdn.dribbble.com/users/35381/screenshots/3607714/pages.png") no-repeat center`,
    width: "850px",
    height: "500px",
    margin: "20px",
  },
  imageText: {
    position: "absolute",
    fontFamily: "courier new",
    left: "50%",
    bottom: "0%",
    transform: "translate(-50%, -50%)",
  },
};

export default Cart;
