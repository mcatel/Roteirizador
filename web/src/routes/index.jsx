import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Router from '../pages/Router';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = ({ gmapsLoaded }) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/router" exact>
        <Router
          gmapsLoaded={gmapsLoaded}
        />
      </Route>

      <Route path="/404" exact component={NotFoundPage} />

      <Route path="/" exact>
        <Redirect to="/router" />
      </Route>

      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
