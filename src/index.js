import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Overlay from "./Overlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Overlay />
  </>
);
