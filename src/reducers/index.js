import { combineReducers } from 'redux';

import sidebar from './sidebar';

/*合并所有*/
const reducer = combineReducers({
  sidebar
});

export default reducer;
