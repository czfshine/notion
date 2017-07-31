import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notebooks from '../components/notebook';

const Notebook = connect()(Notebooks);
export default Notebook;
