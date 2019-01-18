import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './header.css';
import logo from '../../assets/img/l1.png';
class MiddleHeader extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="logo_container">
                <div className="logo_top_head">
                    <div className="top_logo"><img src={logo} alt=""></img></div>
                    <div className="searchBarCss">
                        <input placeholder="Search for products or brands" className="searchfield"></input>
                        <div className="dropdown">
                            <button className="btn btn-secondary AllItems dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#x">Action</a>
                                <a className="dropdown-item" href="#c">Another action</a>
                                <a className="dropdown-item" href="#v">Something else here</a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-info searchbtn">
                        <span className="glyphicon glyphicon-search searchIcon"></span> Search
    </button>
                        <div className="loginSignup">
                            <a href="#d">Login</a>
                            <a href="#d">Sign up</a>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default withRouter(MiddleHeader);