import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';



import App from './components/App';

import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/*全局状态绑定一个reducer，用来更新状态*/
const store = createStore(reducer);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
