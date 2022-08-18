import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/public.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
// import { grey, red } from "@mui/material/colors";
import { red } from "@mui/material/colors";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
