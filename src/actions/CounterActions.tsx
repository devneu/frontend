export enum CounterActionTypes {
  INCREMENT = '[Counter]: Increment',
  DECREMENT = '[Counter]: Decrement',
}

export class CounterActions {
  static incrementValue = () => ({ type: CounterActionTypes.INCREMENT });

  static decrementValue = () => ({ type: CounterActionTypes.DECREMENT });
}
