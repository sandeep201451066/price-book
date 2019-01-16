import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './header.css';
class Header extends Component {
    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="outer_wrap">
                <div className="top_head">
                    <div className="top_head_lft">cscscsc v svv v svsv  </div>
                    <div className="top_head_right">
                    <ul>
                        <div class="Latest_titl">bdddgdg</div>

                       
                            <li>bdbd</li>
                            <li>bdbd</li>
                            <li>bdbd</li>
                            <li>bdbd</li>
                            <li>bbd</li>
                        </ul>
                    </div>
                </div >
            </div >
        );
    }
}

export default withRouter(Header);