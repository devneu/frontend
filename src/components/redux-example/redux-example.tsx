import React, { Component } from 'react'
import { connect } from 'react-redux';
import { IInitialState } from '../../reducers/index';
import { CounterActions } from '../../actions';

const mapStateToProps = ({ counter: { value } }: IInitialState) => {
   return {
      value
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

class ReduxExample extends Component<Props> {
   render() {
      const { value, onIncrement, onDecrement } = this.props;
      return (
         <div>
            <h1>Hello world React & Redux! {value}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);