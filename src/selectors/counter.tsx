import { createSelector } from 'reselect';
import { InitialState } from '../reducers/index';

class CounterSelectors {
   static valueSelector = createSelector(
      (state: InitialState) => state.counter.value,
      value => value
   )
}

export default CounterSelectors