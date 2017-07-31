import React, { Component } from 'react';
import Ico from './ico';
import { Navigation, Header } from 'react-mdl';
class HeadBar extends Component {
  render() {
    return (
      <Header title="洛书">
        <Navigation>
          <a className="mdl-navigation__link" href="#">
            分享
          </a>
          <a className="mdl-navigation__link" href="#">
            风格
          </a>
          <a className="mdl-navigation__link" href="#">
            Slack
          </a>
          <a className="mdl-navigation__link" href="#">
            更多
          </a>

          <a className="mdl-navigation__link" href="#">
            <Ico name="plus" />
          </a>
        </Navigation>
      </Header>
    );
  }
}

export default HeadBar;
