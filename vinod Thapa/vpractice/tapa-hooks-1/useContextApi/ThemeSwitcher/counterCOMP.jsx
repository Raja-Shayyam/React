import { useContext } from "react"
import { Theme } from "./store"

export const CounterCOMP = ({value}) => {
  const {count } = useContext(Theme)

  return (
    <div>
      <span style={{fontFamily:"cursive" , fontSize:"18px" , color:value ,textDecorationLine:"overline"}}>This is another componenet </span>
      <p >count is : {count} </p>
    </div>
  )
}
