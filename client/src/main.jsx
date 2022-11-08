import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import reducers from "./reducer";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

const store = configureStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
