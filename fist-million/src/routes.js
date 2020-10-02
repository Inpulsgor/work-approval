import { lazy } from "react";

export default [
  {
    path: "/",
    label: "StartPage",
    exact: true,
    component: lazy(() => import("./pages/StartPage")),
  },
  {
    path: "/game",
    label: "GamePage",
    exact: false,
    component: lazy(() => import("./pages/GamePage")),
  },
  {
    path: "/end",
    label: "EndPage",
    exact: false,
    component: lazy(() => import("./pages/EndPage")),
  },
];
