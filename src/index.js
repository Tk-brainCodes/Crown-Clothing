import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import CartProvider from "./provider/cart.provider";

import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
