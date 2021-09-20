import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PublicRoute from "./PublicRoute";
import LoginScreen from "./../components/login/LoginScreen";
import RegisterScreen from "./../components/register/RegisterScreen";
import DashboardRouter from "./DashboardRouter";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <PublicRoute exact path="/login" component={LoginScreen} />
        <PublicRoute exact path="/register" component={RegisterScreen} />

        {/* Componente de rutas privadas */}
        <Route path="/home" component={DashboardRouter} />
      </Switch>
    </Router>
  );
}
