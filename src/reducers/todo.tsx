import { AnyAction } from 'redux';

const TodoState: Array<string> = [];

export default function todos(state: any = TodoState, action: AnyAction) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}
