import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { createHashRouter, RouterProvider } from "react-router-dom";
import SpellList from "./components/templates/Spell/SpellList";
import SpellDetailsPage from "./components/modules/Spell/SpellDetails";
import FavoritesList from "./components/modules/Spell/SpellFavoriteList";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "spells",
        element: <SpellList />,
      },
      { path: "spell/:index/", element: <SpellDetailsPage /> },
      { path: "favorites", element: <FavoritesList /> },
    ],
  },
]);

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();