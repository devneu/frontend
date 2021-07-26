import counterReducer from './counter';
import todo from './todo';
import { combineReducers } from 'redux';


export interface InitialState {
   counter: {
      value: number,
   },
}

const reducer = combineReducers({
   counter: counterReducer,
   todo
})

export default reducer
