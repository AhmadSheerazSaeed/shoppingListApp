import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CategoryContextProvider from "./components/addordeletecategories/CategoryContext";
import NewShoppingItemsContextProvider from "./components/newshoppingitems/NewShoppingItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <App />

  // </React.StrictMode>
);
