import React from 'react';
import { storiesOf } from '@storybook/react';
import reducer from '../src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HeadBar from "../src/components/headbar.jsx"
import '../src/style/index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

storiesOf('Bar', module)
  .add('HeadBar', 
        () => <HeadBar/>);

