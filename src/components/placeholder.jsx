import React, { Component } from 'react';

/*
import "codemirror/lib/codemirror.css"
import "codemirror/addon/fold/foldgutter.css"
import "hypermd/hypermd/mode/hypermd.css"
import "hypermd/hypermd/mode/hypermd.css"
import "hypermd/demo/style.css"

import "marked/marked.min"
import  "mathjax/MathJax.js?config=TeX-MML-AM_CHTML"

import "./index"
import "./index2"
*/

var CodeMirror = require('react-codemirror');
require('codemirror/lib/codemirror.css');

var Placeholder = () => {
  return <textarea id="demo" />;
};
export default Placeholder;
