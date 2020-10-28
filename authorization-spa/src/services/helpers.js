import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// private
export const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

// public
export const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/characters" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
