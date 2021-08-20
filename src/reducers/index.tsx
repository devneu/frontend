import { combineReducers } from 'redux';
import counterReducer from './counter';
import todo from './todo';
import postReducer from './post';

export interface InitialState {
  counter: {
    value: number;
  };
}

const reducer = combineReducers({
  counter: counterReducer,
  todo,
  postReducer,
});

export default reducer;
