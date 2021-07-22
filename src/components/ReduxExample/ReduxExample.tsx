import { ReactElement } from 'react'
import { connect } from 'react-redux';
import { InitialState } from '../../reducers/index';
import { incrementValue, decrementValue } from '../../actions';

const mapStateToProps = (state: InitialState) => {
   return {
      state
   };
}

const mapDispatchToProps = {
   onIncrement: incrementValue,
   onDecrement: decrementValue,
}

interface StateProps {
   state: any;
}

interface DispatchProps {
   onIncrement: () => void;
   onDecrement: () => void;
}

interface OwnProps {

}

const ReduxExample = ({ state, onIncrement, onDecrement }: Props): ReactElement => {

   return (
      <div>
         <h1>Hello world React & Redux! {state.counter.value}</h1>
         <button onClick={onIncrement}>Increment</button>
         <button onClick={onDecrement}>Decrement</button>
      </div>
   )

}
type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, InitialState>(mapStateToProps, mapDispatchToProps)(ReduxExample);