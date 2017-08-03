import React, { Component } from 'react';
import { Drawer, Navigation } from 'react-mdl';
import UserInfo from './userinfo';
import Notebooks from '../containers/notebooks';
class SideBar extends Component {
  render() {
    return (
      <Drawer>
        <Navigation>
          <UserInfo />
          <Notebooks />
          <ul className="nav nav-sidebar">
            <li>
              <a className="mdl-navigation__link" href="#test">
                下载桌面应用
              </a>
            </li>
            <li>
              <a className="mdl-navigation__link" href="#test">
                帮助与回馈
              </a>
            </li>
          </ul>
        </Navigation>
      </Drawer>
    );
  }
}
export default SideBar;
