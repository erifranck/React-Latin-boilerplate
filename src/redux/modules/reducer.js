import { combineReducers } from 'redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import greetings from './greetings';

export default combineReducers({
  greetings,
  reduxAsyncConnect
});
