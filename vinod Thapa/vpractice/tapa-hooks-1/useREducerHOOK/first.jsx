import { useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return (state=state+1)
      break;
    case 'DECREMENT':
      return (state=state-1)
      break;
    case 'RESET':
      return (state=0)
      break;

    default:
      break;
  }
}

const First = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="min-div">
      <h2>useReducer concept</h2>
      <h4> Value is {state}</h4>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </div>
  )
}

export default First


