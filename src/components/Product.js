import React from "react";
import {
  addToCart,
  removeFromCart,
  notifyMissing,
  notifySuccess,
  notifyDeleted,
  notifyInfo,
} from "../actions";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isParagraphEditable: false,
    };
    this.paraRef = React.createRef();
  }
  handleAddToCart = () => {
    const product = this.props.product;
    const { dispatch } = this.props;
    dispatch(addToCart(product));
    notifySuccess("Added to cart!");
  };

  handleRemoveFromCart = () => {
    const { dispatch } = this.props;
    const product = this.props.product;
    dispatch(removeFromCart(product));
    notifyDeleted("Removed from cart!");
  };

  handleEditDescription = () => {
    const para = this.paraRef.current;
    console.log(para);
    this.setState({
      isParagraphEditable: true,
    });
    notifyInfo("You are editing the product!");
  };

  handleSaveDescription = () => {
    this.setState({
      isParagraphEditable: false,
    });
    notifySuccess("Saved successfully!");
  };

  render() {
    const { name, price, rating, description, picture } = this.props.product;
    const isAddedToCart = this.props.isAddedToCart;
    const { isParagraphEditable } = this.state;
    return (
      <div style={styles.card}>
        <div style={styles.photo}>
          <img src={picture} style={styles.img} />
        </div>
        <div className="description">
          <h2>{name}</h2>
          <p
            ref={this.paraRef}
            contentEditable={isParagraphEditable ? "true" : "false"}
          >
            {description}
          </p>
          <h1>Rs {price}</h1>
          <div style={styles.buttons}>
            {isParagraphEditable ? (
              <button
                style={styles.button}
                onClick={this.handleSaveDescription}
              >
                Save
              </button>
            ) : (
              <button
                style={styles.button}
                onClick={this.handleEditDescription}
              >
                Edit
              </button>
            )}
            {isAddedToCart ? (
              <button style={styles.button} onClick={this.handleRemoveFromCart}>
                Remove From Cart
              </button>
            ) : (
              <button style={styles.button} onClick={this.handleAddToCart}>
                Add to Cart
              </button>
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
  button: {
    outline: "0",
    border: "0",
    background: "none",
    border: "1px solid #d9d9d9",
    padding: "8px 0px",
    marginBottom: "30px",
    color: "#515151",
    textTransform: "uppercase",
    width: "150px",
    fontFamily: "inherit",
    marginRight: "5px",
    transition: "all 0.3s ease",
    fontWeight: "500",
    cursor: "pointer",

    "&:hover": {
      border: "1px solid #aedaa6",
      color: "#aedaa6",
    },
  },
};

export default Product;
