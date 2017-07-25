import React, {Component} from 'react';

import Ico from "./ico";
class UserInfo extends Component {
    render() {
        return (
            <ul className="nav nav-sidebar">
                <li>
                    <a href="#">
                        <Ico name="user"/>用户名
                        <Ico name="chevron-down"/>
                    </a>
                </li>
            </ul>
        )
    }
}

export  default  UserInfo;