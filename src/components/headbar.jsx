import React, { Component } from 'react';
import Ico from './ico';
import { Navigation, Header } from 'react-mdl';
class HeadBar extends Component {
  render() {
    return (
      <Header title="洛书">
        <Navigation>
          <a className="mdl-navigation__link" href="#test">
            分享
          </a>
          <a className="mdl-navigation__link" href="#test">
            风格
          </a>
          <a className="mdl-navigation__link" href="#test">
            Slack
          </a>
          <a className="mdl-navigation__link" href="#test">
            更多
          </a>

          <a className="mdl-navigation__link" href="#test">
            <Ico name="plus" />
          </a>
        </Navigation>
      </Header>
    );
  }
}

export default HeadBar;
