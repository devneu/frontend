import React, { ReactElement } from 'react'
import logo from './logo.svg';
import './App.scss';
import ReduxExample from './components/redux-example'


const App = (): ReactElement => {
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
        <ReduxExample />
      </header>
    </div>
  );
}



export default App;
