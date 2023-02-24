import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers/index.js";
import {Router} from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
  <Router history={history}>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>
);
