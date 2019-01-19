import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
class MainDashboard extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="container1">
            <div className="productBox">
                <div className="column">
                    <div className="title">
                            <h4>vdvdds</h4>
                    </div>
                    <div className="price">
                        <h4>pricw</h4>
                    </div>
                    <div className="Options">
                        <ul>
                            <li>bergerge</li>
                            <li>bergerge</li>
                            <li>bergerge</li>
                        </ul>
                    </div>
                    <a href="#d">view detail</a>
                </div>

                <div className="column">
                    <div className="title">
                    <h4>vdvdds</h4>
                    </div>
                    <div className="price">
                        <h4>pricw</h4>
                    </div>
                    <div className="Options">
                        <ul>
                            <li>bergerge</li>
                            <li>bergerge</li>
                            <li>bergerge</li>
                        </ul>
                    </div>
                    <a href="#d">view detail</a>
                </div>

                <div className="column">
                    <div className="title">
                    <h4>vdvdds</h4>
                    </div>
                    <div className="price">
                        <h4>pricw</h4>
                    </div>
                    <div className="Options">
                        <ul>
                            <li>bergerge</li>
                            <li>bergerge</li>
                            <li>bergerge</li>
                        </ul>
                    </div>
                    <a href="#d">view detail</a>
                </div>
               
                </div>
            </div>
        );
    }
}

export default withRouter(MainDashboard);