import ReduxExample from './ReduxExample';
import { connect } from 'react-redux';
import CounterSelectors from '../../selectors/counter'
import { InitialState } from '../../reducers/index';
import { CounterActions } from '../../actions';
import { OwnProps } from './ReduxExample';

export interface StateProps {
   value: number
}

export interface DispatchProps {
   onIncrement: () => void;
   onDecrement: () => void;
}

const mapStateToProps = (state: InitialState) => {
   return {
      value: CounterSelectors.valueSelector(state)
   };
}

const mapDispatchToProps = {
   onIncrement: CounterActions.incrementValue,
   onDecrement: CounterActions.decrementValue,
}

const ReduxExampleContainer = connect<StateProps, DispatchProps, OwnProps, InitialState>(mapStateToProps, mapDispatchToProps)(ReduxExample);

export default ReduxExampleContainer;