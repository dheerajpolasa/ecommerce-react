import React from "react";
import { addToCart, removeFromCart } from "../actions";

class Product extends React.Component {
  handleAddToCart = () => {
    const product = this.props.product;
    const { dispatch } = this.props;
    dispatch(addToCart(product));
  };

  handleRemoveFromCart = () => {
    const { dispatch } = this.props;
    const product = this.props.product;
    dispatch(removeFromCart(product));
  };

  render() {
    const { name, price, rating, description, picture } = this.props.product;
    const isAddedToCart = this.props.isAddedToCart;
    return (
      <div style={styles.card}>
        <div style={styles.photo}>
          <img src={picture} style={styles.img} />
        </div>
        <div className="description">
          <h2>{name}</h2>
          <p>{description}</p>
          <h1>Rs {price}</h1>
          <div style={styles.buttons}>
            <button>Edit</button>
            {isAddedToCart ? (
              <button onClick={this.handleRemoveFromCart}>
                Remove From Cart
              </button>
            ) : (
              <button onClick={this.handleAddToCart}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  card: {
    width: "650px",
    // height: 375px;
    // position: "abso",
    background: "white",
    margin: "10px",
    display: "flex",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)",
    transition: "all 0.3s",
  },
  photo: {
    padding: "30px",
    width: "45%",
    textAlign: "center",
    float: "left",
  },
  img: {
    maxHeight: "240px",
    maxWidth: "250px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
  },
};

export default Product;
