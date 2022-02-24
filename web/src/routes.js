import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Router from './pages/Router';
import NotFoundPage from './pages/NotFoundPage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/router" exact component={Router} />
                <Route path="/404" exact component={NotFoundPage} />

                <Route path="/" exact>
                    <Redirect to="/router" />
                </Route>

                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;