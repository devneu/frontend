import { connect } from 'react-redux';
import ReduxExample, { OwnProps } from './ReduxExample';
import CounterSelectors from '../../selectors/counter';
import { InitialState } from '../../reducers';
import { CounterActions } from '../../actions/CounterActions';

export interface StateProps {
  value: number;
}

export interface DispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const mapStateToProps = (state: InitialState) => ({ value: CounterSelectors.valueSelector(state) });

const mapDispatchToProps = {
  onIncrement: CounterActions.incrementValue,
  onDecrement: CounterActions.decrementValue,
};

const ReduxExampleContainer = connect<StateProps, DispatchProps, OwnProps, InitialState>(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxExample);

export default ReduxExampleContainer;
