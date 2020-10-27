import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import { CommonLoading } from "react-loadingg";

import routes from "./routes";
import { PrivateRoute, PublicRoute } from "./services/helpers";
import "./scss/App.scss";

function App() {
  const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      {isLoading && (
        <div className="loaderOverlay">
          <CommonLoading color="orange" size="large" />
        </div>
      )}
      <Switch>
        {routes.map((route) => {
          return route.private ? (
            <PrivateRoute key={route.label} {...route} />
          ) : (
            <PublicRoute
              key={route.label}
              {...route}
              restricted={route.restricted}
            />
          );
        })}
        <Redirect to="/login" />
      </Switch>
    </Suspense>
  );
}

export default App;
