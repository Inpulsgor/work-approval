import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import { CommonLoading } from 'react-loadingg';

import { AuthorizationPage, CharactersPage } from './pages/index';
// import {  } from './components/index';

import './scss/App.scss';

function App() {
  const isLoading = useSelector(state => state.isLoading.isLoading);
  
  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      {isLoading && (
        <div className="loaderOverlay">
          <CommonLoading color="orange" size="large" />
        </div>
      )}
      <Switch>
        <Route path="/login" component={AuthorizationPage} />
        <Route path="/characters" component={CharactersPage} />
        <Redirect to="/login"/>
      </Switch>
    </Suspense>
  );
}

export default App;
