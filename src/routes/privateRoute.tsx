import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ ...rest }) => {
  const isLoggedIn = localStorage.getItem("jwt");

  if (isLoggedIn) {
    return <Route {...rest} />;
  }

  return <Redirect to="/" />;
};
