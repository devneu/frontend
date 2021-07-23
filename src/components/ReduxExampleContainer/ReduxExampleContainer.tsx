import ReduxExample from './ReduxExample';
import { connect } from 'react-redux';
import CounterSelectors from '../../selectors/counter'
import { InitialState } from '../../reducers/index';
import { CounterActions } from '../../actions';

interface StateProps {
   value: number
}

interface DispatchProps {
   onIncrement: () => void;
   onDecrement: () => void;
}

interface OwnProps { }

export type Props = StateProps & DispatchProps & OwnProps;

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