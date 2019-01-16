import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from '../Components/Header/index'


const MyRoutes = (
    <Router>
        <Switch>
            <Route
                path="/"
                render={a => {
                    return (
                        <Header />
                        
                    )
                }}
            />
        </Switch>
    </Router>
);

export default MyRoutes;