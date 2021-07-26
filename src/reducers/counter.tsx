import { AnyAction } from 'redux';
import { CounterActionTypes } from '../actions';

export interface CounterState {
   value: number
}
const counterState: CounterState = {
   value: 0,
}

const counterReducer = function (state: CounterState = counterState, action: AnyAction): CounterState {

   switch (action.type) {

      case CounterActionTypes.INCREMENT:
         return {
            value: state.value + 1
         };
      case CounterActionTypes.DECREMENT:
         return {
            value: state.value - 1
         };
      default:
         return state;
   }
};

export default counterReducer;
