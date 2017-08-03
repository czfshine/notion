import React, { Component } from 'react';
import 'jquery/dist/jquery.min';
import '../style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dashboard.css';

import { Layout } from 'react-mdl';

import HeadBar from './headbar';
import SideBar from './sidebar';
import Container from './container';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader fixedDrawer>
          <HeadBar />
          <SideBar />
          <Container />
        </Layout>
      </div>
    );
  }
}

export default App;
