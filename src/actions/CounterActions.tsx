import { INCREMENT_VALUE, DECREMENT_VALUE } from '../actiontypes';

const incrementValue = () => {

   return {
      type: INCREMENT_VALUE,
   }
}
const decrementValue = () => {
   return {
      type: DECREMENT_VALUE,
   }
}

export {
   incrementValue,
   decrementValue,
}