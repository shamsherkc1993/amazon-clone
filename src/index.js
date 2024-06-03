import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./errorPage/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCart from "./shoppingCart/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
