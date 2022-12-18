import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/public.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
/////////////////////
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "features/produtsSlice";
import { productsApi } from "./features/productAPI";
///////////////////////////

import { createTheme } from "@mui/material/styles";
// import { grey, red } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import cartReducer from "features/cartSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware )=>{
   return getDefaultMiddleware().concat(productsApi.middleware )
  }
});
store.dispatch(productsFetch());
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
