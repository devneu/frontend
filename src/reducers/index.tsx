import counterReducer from './counter';
import { AnyAction } from 'redux';


export interface InitialState {
   counter: {
      value: number,
   }
}
const reducer = (state: any, action: AnyAction) => {
   console.log(action.type);

   return {
      counter: counterReducer(state, action)
   }
}

export default reducer
