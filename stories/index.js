import React from 'react';
import { storiesOf } from '@storybook/react';
import HeadBar from "../src/components/headbar.jsx"
import '../src/style/index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import MDInput from "../src/components/MDInput.jsx"

import Vertical from "../src/layout/vertical.jsx"
import Horizontal  from "../src/layout/horizontal.jsx"
storiesOf('Bar', module)
  .add('HeadBar', 
        () => <HeadBar/>);

storiesOf("Input",module).add("MD-inline",
()=> <MDInput/>)

let a=1;
const Block = ()=>{
      a=a+1;
      return <div style={{
                  "border":"10px",
                  "backgroundColor":"#33ffff",
                  "margin":"10px"
            }
}> Lorem ipsum dolor sit amet, {a}</div>}

storiesOf("Layout",module).add("H-V",
()=> <Vertical style={{
                  "border":"1px solid #f00",
                  "margin":"10px"}}
                  >

      <Horizontal  style={{
                  "border":"1px solid #0f0",
                  "margin":"10px"}}
                  >
                  
            {a=0,false}
          <Vertical style={{
                  "border":"1px solid #00f",
                  "margin":"10px"}}
                  >
                <Block/>
                <Block/>
                 <Block/>
          </Vertical>
          <Vertical style={{
                  "border":"1px solid #00f",
                  "margin":"10px"}}
                  >
                <Block/>
                <Block/>
          </Vertical>
      </Horizontal >

      <Horizontal  style={{
                  "border":"1px solid #0f0",
                  "margin":"10px"}}
                  >
            {a=0,false}
          <Vertical style={{
                  "border":"1px solid #00f",
                  "margin":"10px"}}
                  >
                <Block/>
                <Block/>
                 <Block/>
          </Vertical>
          <Vertical style={{
                  "border":"1px solid #00f",
                  "margin":"10px"}}
                  >
                <Block/>
                <Block/>
                <Block/>
                <Block/>
          </Vertical>
           <Vertical style={{
                  "border":"1px solid #00f",
                  "margin":"10px"}}
                  >
                <Block/>
                <Block/>
                <Block/>
          </Vertical>
      </Horizontal >

      </Vertical>)