import React from "react";

import { addProductToStore, notifyMissing, notifySuccess } from "../actions";

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      picture: "",
    };

    this.form = React.createRef();
  }
  handleChange = (event) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        return;
      case "price":
        this.setState({ price: event.target.value });
        return;
      case "description":
        this.setState({ description: event.target.value });
        return;
      case "image":
        this.setState({ picture: event.target.value });
        return;
      default:
        return;
    }
    // this.setState({ event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const dispatch = this.props.dispatch;
    for (let key in this.state) {
      if (this.state[key] === null || this.state[key] === "") {
        console.log(`${key} is required`);
        notifyMissing(`${key} is missing`);
        return false;
      }
    }
    notifySuccess("Product is added to store");
    this.setState(this.clearState());
    dispatch(addProductToStore(this.state));
  };

  clearState = () => {
    return {
      name: "",
      price: "",
      picture: "",
      description: "",
    };
  };

  render() {
    return (
      <div>
        <form style={styles.form} ref={(ele) => (this.form = ele)}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            style={styles.input}
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            value={this.state.price}
            style={styles.input}
            name="price"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.picture}
            style={styles.input}
            name="image"
            onChange={this.handleChange}
          />
          <textarea
            placeholder="Description"
            value={this.state.description}
            style={styles.input}
            name="description"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="submit"
            style={styles.input}
            style={styles.button}
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  },
  input: {
    margin: "10px",
    padding: "5px",
    width: "350px",
  },
  button: {
    outline: "0",
    border: "0",
    background: "#EFFBFF",
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
  },
};

export default NewProduct;
