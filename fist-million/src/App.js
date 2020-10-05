import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className="App">
        <Switch>
          {routes.map(({ path, component, label, exact }) => (
            <Route
              exact={exact ? true : null}
              key={label}
              path={path}
              component={component}
            />
          ))}
          <Redirect to="/" />;
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
