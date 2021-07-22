import { CounterActionTypes } from '../actiontypes';

class CounterActions {
   static incrementValue = () => {
      return {
         type: CounterActionTypes.INCREMENT,
      }
   };
   static decrementValue = () => {
      return {
         type: CounterActionTypes.DECREMENT,
      }
   }
}

export {
   CounterActions
}