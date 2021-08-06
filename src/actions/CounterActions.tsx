enum CounterActionTypes {
  INCREMENT = '[Counter]: Increment',
  DECREMENT = '[Counter]: Decrement',
}

class CounterActions {
  static incrementValue = () => ({ type: CounterActionTypes.INCREMENT });
  static decrementValue = () => ({ type: CounterActionTypes.DECREMENT });
}

export { CounterActionTypes, CounterActions };
