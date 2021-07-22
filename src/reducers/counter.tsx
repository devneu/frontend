import { AnyAction } from 'redux';
import { INCREMENT_VALUE, DECREMENT_VALUE } from '../actiontypes';
import { InitialState } from './index'

export interface ICounterState {
   value: number
}

const counterReducer = function (state: InitialState, action: AnyAction): ICounterState {


   if (state === undefined) {
      return {
         value: 0,
      }
   }
   switch (action.type) {

      case INCREMENT_VALUE:
         return {
            value: state.counter.value + 1
         };
      case DECREMENT_VALUE:
         return {
            value: state.counter.value - 1
         };
      default:
         return state.counter;
   }
};

export default counterReducer;
