import React, {Component} from 'react';

import UserInfo from "./userinfo";
import Notebooks from "../containers/notebooks"
class SideBar extends Component {

    render() {
        return (

            <div className="col-sm-2 col-md-2 sidebar">
                <UserInfo/>
                <Notebooks/>
                <ul className="nav nav-sidebar">
                    <li><a href="#">下载桌面应用</a></li>
                    <li><a href="#">帮助与回馈</a></li>
                </ul>
            </div>
        )
    }
}
export default SideBar;