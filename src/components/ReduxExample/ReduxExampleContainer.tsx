import ReduxExample from './ReduxExample';
import { connect } from 'react-redux';
import CounterSelectors from '../../selectors/counter'
import { InitialState } from '../../reducers/index';
import { CounterActions } from '../../actions';


const mapStateToProps = (state: InitialState) => {
   return {
      value: CounterSelectors.valueSelector(state)
   };
}

const mapDispatchToProps = {
   onIncrement: CounterActions.incrementValue,
   onDecrement: CounterActions.decrementValue,
}

const ReduxExampleContainer: any = connect(mapStateToProps, mapDispatchToProps)(ReduxExample);

export default ReduxExampleContainer;