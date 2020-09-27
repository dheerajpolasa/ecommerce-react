import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <div style={styles.leftContainer}>
        <Router>
          <div style={styles.leftContainer__item}>
            <img
              style={styles.cartIcon}
              src="https://www.jazva.com/cm/Amazon-logo-700x433.jpg"
              alt="cart-icon"
            />
          </div>
          <div style={styles.leftContainer__item}>
            <Link to={"/"} style={styles.anchor}>
              Products
            </Link>
          </div>
          <div style={styles.leftContainer__item}>
            <Link to={"/add-product"} style={styles.anchor}>
              Add Product
            </Link>
          </div>
        </Router>
      </div>
      <div style={styles.rightContainer}>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://image.flaticon.com/icons/svg/3036/3036969.svg"
            alt="cart-icon"
          />
          <span style={styles.cartCount}>2</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  anchor: {
    textDecoration: "none",
    color: "blue",
  },
  nav: {
    height: 70,
    background: "white",
    boxShadow: "0 8px 6px -6px black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
    left: "0",
  },
  leftContainer__item: {
    magin: "5px",
    padding: "10px",
  },
  rightContainer: {
    display: "flex",
  },
  cartIconContainer: {
    display: "relative",
    marginRight: "20px",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: "20px",
    top: 0,
  },
};

export default Navbar;
