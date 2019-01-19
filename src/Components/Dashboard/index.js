import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/index'
import MainDashboard from './dashboard/index';
class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
            <Header></Header>
            <MainDashboard></MainDashboard>
            </div>
        );
    }
}

export default withRouter(Dashboard);