import React, { ReactElement } from 'react';
import { StateProps, DispatchProps } from './ReduxExampleContainer';

export interface OwnProps {}
type Props = StateProps & DispatchProps & OwnProps;

const ReduxExample = ({ value, onIncrement, onDecrement }: Props): ReactElement => (
  <div>
    <h1>
      Hello world React & Redux!
      {value}
    </h1>
    <button onClick={onIncrement} type="button">
      Increment
    </button>
    <button onClick={onDecrement} type="button">
      Decrement
    </button>
  </div>
);

export default ReduxExample;
