import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Dashboard from '../Components/Dashboard/index'


const MyRoutes = (
    <Router>
        <Switch>
            <Route
                path="/"
                render={a => {
                    return (
                        <Dashboard />
                        
                    )
                }}
            />
        </Switch>
    </Router>
);

export default MyRoutes;