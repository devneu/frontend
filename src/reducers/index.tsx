import counterReducer from './counter';
import { AnyAction } from 'redux';


export interface InitialState {
   counter: {
      value: number,
   }
}
const reducer = (state: any, action: AnyAction) => {
   return {
      counter: counterReducer(state, action)
   }
}

export default reducer
