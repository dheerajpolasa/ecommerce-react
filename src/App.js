import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "./index.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import Cart from "./components/Cart";

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
    const store = this.props.store;
    const { dispatch } = this.props.store;
    return (
      <div className="App" style={styles.app}>
        <ReactNotification />
        <Router>
          <Navbar store={this.props.store} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Products {...props} store={store} dispatch={dispatch} />
              )}
            />
            <Route
              path="/add-product"
              render={(props) => (
                <NewProduct {...props} store={store} dispatch={dispatch} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => <Cart {...props} store={store} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const styles = {
  app: {},
};

export default App;
