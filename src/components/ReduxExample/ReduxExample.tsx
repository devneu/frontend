import { ReactElement } from 'react'

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

export default ReduxExample;