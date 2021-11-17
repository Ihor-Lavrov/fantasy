import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { PrivateRoute } from "./privateRoute";
import { history } from "../store/configure-store";
import { routesPath } from "./routesPath";
import { SignIn, SignUp } from "../pages/Auth";
import { Dashboard } from "../pages/dashboard";

function Routing() {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute
            exact
            path={routesPath.dashboard}
            component={Dashboard}
          />
          <Redirect from="/" to={routesPath.dashboard} />
        </Switch>
      </>
    </ConnectedRouter>
  );
}

export default Routing;
