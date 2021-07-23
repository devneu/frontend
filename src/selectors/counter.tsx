import { createSelector } from 'reselect';
import { InitialState } from '../reducers/index';
import { CounterState } from '../reducers/counter';
class CounterSelectors {
   static domainSelector = (state: InitialState) => state.counter;
   static valueSelector = createSelector(
      CounterSelectors.domainSelector,
      (state: CounterState) => state.value
   )
}

export default CounterSelectors