import { lazy } from "react";
import { Route } from "../models/routes";
import { Dashboard } from "../pages/dashboard";

export const routes: Route[] = [
  {
    path: "/dashboard",
    exact: true,
    Component: Dashboard,
  },
];
