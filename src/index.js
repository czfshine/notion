import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


require("codemirror/lib/codemirror.css")
require ("codemirror/addon/fold/foldgutter.css")
require ("hypermd/hypermd/mode/hypermd.css")
require("hypermd/hypermd/theme/hypermd-light.css")
require ("marked/marked.min.js")
/*全局状态绑定一个reducer，用来更新状态*/
const store = createStore(reducer);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

registerServiceWorker()