import { AnyAction } from 'redux';
import { CounterActionTypes } from '../actiontypes';

export interface ICounterState {
   value: number
}
const CounterState: ICounterState = {
   value: 0,
}

const counterReducer = function (state: ICounterState = CounterState, action: AnyAction): ICounterState {

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
