import React from 'react';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';
import Router from '../pages/Router';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = ({ gmapsLoaded }) => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact>
        <Router
          gmapsLoaded={gmapsLoaded}
        />
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
