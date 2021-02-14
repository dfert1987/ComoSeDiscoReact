import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import { csdTheme } from "./Components";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={csdTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
