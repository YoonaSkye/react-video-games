import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 配置Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
