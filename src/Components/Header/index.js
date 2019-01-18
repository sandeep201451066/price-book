import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './header.css';
import MiddleHeader from './middle_header';
class Header extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
            <div className="outer_wrap">
                <div className="top_head">
                    <div className="top_head_lft font-size">Largest Gadget Discovery Site in India</div>
                    <div className="top_head_right">
                    <ul className="font-size">
                        <div className="Latest_titl font-size">Latest Mobiles</div>
                            <li className="ul_border">MI 6 Pro</li>
                            <li className="ul_border">Redmi Note 7</li>
                            <li className="ul_border">Redmi Note 2</li>
                            <li className="ul_border">Redmi Note 5</li>
                            <li>Samsung Note 7</li>
                        </ul>
                    </div>
                </div>
            </div>
            <MiddleHeader></MiddleHeader>
            </div>
        );
    }
}

export default withRouter(Header);