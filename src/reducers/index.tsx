import { combineReducers } from 'redux';
import counterReducer from './counter';
import todo from './todo';

export interface InitialState {
  counter: {
    value: number;
  };
}

const reducer = combineReducers({
  counter: counterReducer,
  todo,
});

export default reducer;
