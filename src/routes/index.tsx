import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PrivateRoute } from "./privateRoute";
import { history } from "../store/configure-store";
import { routesPath } from "./routesPath";
import { SignIn, SignUp } from "../pages/Auth";

function Routing() {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path={routesPath.home} />
          <Redirect from="/" to={routesPath.home} />
        </Switch>
      </>
    </ConnectedRouter>
  );
}

export default Routing;
