import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Router from '../pages/Router';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = ({ gmapsLoaded }) => (
  <BrowserRouter basename="/roteirizador">
    <Switch>
      <Route path="/" exact>
        <Router
          gmapsLoaded={gmapsLoaded}
        />
      </Route>

      <Route path="/404" exact>
        <NotFoundPage />
      </Route>

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
