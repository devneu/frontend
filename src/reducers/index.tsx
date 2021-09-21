import { combineReducers } from 'redux';
import counterReducer from './counter';

import blogReducer, { BlogState } from './blog';

export interface InitialState {
  counter: {
    value: number;
  };
  blog: BlogState;
}

const reducer = combineReducers({
  counter: counterReducer,
  blog: blogReducer,
});

export default reducer;
