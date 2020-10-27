import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.connection);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.connection);

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
