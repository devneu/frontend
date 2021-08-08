import counterReducer from './counter';
import { combineReducers } from 'redux';
import blogReducer from './blog';
import { BlogState } from '../types/blogTypes';



export interface InitialState {
   counter: {
      value: number,
   },
   blog: BlogState
}

const reducer = combineReducers({
   counter: counterReducer,
   blog: blogReducer,
})

export default reducer
