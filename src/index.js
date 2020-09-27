import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { configureStore } from "./store";

const store = configureStore();
console.log("store ", store.getState());
ReactDOM.render(<App store={store} />, document.getElementById("root"));
