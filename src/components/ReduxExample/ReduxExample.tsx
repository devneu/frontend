import { ReactElement } from 'react'
import { Props } from './ReduxExampleContainer'


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