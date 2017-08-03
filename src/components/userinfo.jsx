import React, { Component } from 'react';
import Ico from './ico';
import { Badge, Icon } from 'react-mdl';
class UserInfo extends Component {
  render() {
    return (
      <ul className="nav nav-sidebar">
        <li>
          <a className="mdl-navigation__link" href="#test">
            <Badge text="1" overlap>
              <Icon name="account_box" />
            </Badge>
            用户名
            <Ico name="chevron-down" />
          </a>
        </li>
      </ul>
    );
  }
}

export default UserInfo;
