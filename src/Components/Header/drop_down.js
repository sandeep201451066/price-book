import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './header.css';
class DropDown extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="dropdown_container">
                <div className="dropDown">
                </div>
            </div>
        );
    }
}

export default withRouter(DropDown);