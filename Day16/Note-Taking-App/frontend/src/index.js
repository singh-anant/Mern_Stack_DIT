import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { auth, app } from "./shared/firebase/firebase-config";
import { BrowserRouter } from "react-router-dom";
// Routing will be enable throughout the application so we need browserRouter
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
