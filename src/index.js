import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SearchRestaurant from "./Pages/SearchRestaurant";
import RestaurantById from "./Pages/RestaurantById";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchRestaurant />,
  },
  {
    path: "/:id",
    element: <RestaurantById />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
