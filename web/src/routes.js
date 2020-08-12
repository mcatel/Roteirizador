import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Router from './pages/Router';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Router} />
        </BrowserRouter>
    );
}

export default Routes;