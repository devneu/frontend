import { ReactElement } from 'react'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InitialState } from '../../reducers/index';
import { CounterActions } from '../../actions';

const valueSelector = createSelector(
   (state: InitialState) => state.counter.value,
   value => value
);
const mapStateToProps = (state: InitialState) => {
   return {
      value: valueSelector(state)
   };
}

const mapDispatchToProps = {
   onIncrement: CounterActions.incrementValue,
   onDecrement: CounterActions.decrementValue,
}

interface StateProps {
   value: number
}

interface DispatchProps {
   onIncrement: () => void;
   onDecrement: () => void;
}

interface OwnProps { }

type Props = StateProps & DispatchProps & OwnProps;

const ReduxExample = ({ value, onIncrement, onDecrement }: Props): ReactElement => {
   return (
      <div>
         <h1>Hello world React & Redux! {value}</h1>
         <button onClick={onIncrement}>Increment</button>
         <button onClick={onDecrement}>Decrement</button>
      </div>
   )

}
const ReduxExampleContainer: any = connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
export default ReduxExampleContainer;