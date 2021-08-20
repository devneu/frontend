import { AnyAction } from 'redux';
import { CounterActionTypes } from '../actions/CounterActions';

export interface PostState {
  currentPost: object;
}
const postState: PostState = { currentPost: {} };

const postReducer = (state: PostState = postState, action: AnyAction): PostState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { currentPost: action.payload };
    default:
      return state;
  }
};

export default postReducer;
