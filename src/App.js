import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

import { fetchProducts } from "./actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });

    store.dispatch(fetchProducts());
  }
  render() {
    console.log(this.props.store);
    // const { products } = this.props.store.getState();
    const { dispatch } = this.props.store;
    return (
      <div className="App">
        <Navbar />
        <Products store={this.props.store} dispatch={dispatch} />
      </div>
    );
  }
}

export default App;
