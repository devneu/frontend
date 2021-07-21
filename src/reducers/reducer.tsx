import { AnyAction } from 'redux'

export interface CounterState {
   value: number
}

const initialState: CounterState = {
   value: 0
}

const reducer = function (state = initialState, action: AnyAction): CounterState {
   switch (action.type) {
      case "INCREMENT_VALUE":
         return {
            value: state.value + 1,
         };
      case "DECREMENT_VALUE":
         return {
            value: state.value - 1,
         };
      default:
         return state;
   }
};

export default reducer;
