import React, { ReactElement } from 'react'
import logo from './logo.svg';
import './App.scss';
import { connect, ConnectedProps } from 'react-redux';
import { CounterState } from './reducers/reducer';
import store from './store';
import { incrementValue, decrementValue } from './actions'

const mapStateToProps = (state: CounterState) => {

  console.log(state);
  return {
    state
  };
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
  return {
    onIncrement: incrementValue,
    onDecrement: decrementValue,
  }
}

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {
//   state: CounterState,
// };

interface StateProps {
  state: any;
}

interface DispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

interface OwnProps {

}


type Props = StateProps & DispatchProps & OwnProps; // TODO: read https://react-redux.js.org/using-react-redux/usage-with-typescript#manually-typing-connect

const App = ({ state, onIncrement, onDecrement }: Props): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h1>Hello world React & Redux! {state.value}</h1>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
        </div>
      </header>
    </div>
  );
}



export default connect<StateProps, DispatchProps, OwnProps, CounterState>(mapStateToProps, mapDispatchToProps)(App);
