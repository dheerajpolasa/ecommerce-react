import React from "react";

import Product from "./Product";

class Products extends React.Component {
  isProductAddedToCart = (product) => {
    const { cart } = this.props.store.getState();
    const result = cart.filter((cartProduct) => cartProduct.id === product.id);
    if (result.length > 0) {
      return true;
    }
    return false;
  };
  render() {
    const { store, dispatch } = this.props;
    const { products } = store.getState();
    return (
      <div style={styles.cards}>
        {products.map((product, index) => {
          return (
            <Product
              product={product}
              key={`product-${index}`}
              dispatch={dispatch}
              isAddedToCart={this.isProductAddedToCart(product)}
            />
          );
        })}
      </div>
    );
  }
}

const styles = {
  cards: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default Products;
