import { AnyAction } from 'redux';
import { CounterActionTypes } from '../actions';

export interface CounterStateInterface {
   value: number
}
const CounterState: CounterStateInterface = {
   value: 0,
}

const counterReducer = function (state: CounterStateInterface = CounterState, action: AnyAction): CounterStateInterface {

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
