import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
