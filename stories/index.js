import React from 'react';
import { storiesOf } from '@storybook/react';
import HeadBar from "../src/components/headbar.jsx"
import '../src/style/index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import MDInput from "../src/components/MDInput.jsx"
storiesOf('Bar', module)
  .add('HeadBar', 
        () => <HeadBar/>);

storiesOf("Input",module).add("MD-inline",
()=> <MDInput/>)