import React from "react";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/game/:id",
    element: <GamePage />,
    name: "GamePage",
  },
];
