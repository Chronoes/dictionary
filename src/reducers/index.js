import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import search from './searchReducer';

export default combineReducers({
  routing: routerReducer,
  search,
});
