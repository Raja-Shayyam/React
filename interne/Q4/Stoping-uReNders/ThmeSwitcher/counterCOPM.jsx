import { memo, useContext } from "react"
import { Theme } from "./store"

export const CounterCOMP =memo( ({ value }) => {
  // const { count } = useContext(Theme)
  console.log('salam os another');
  
  return (
    <div>
      <span style={{ fontFamily: "cursive", fontSize: "18px", color: value, textDecorationLine: "overline" }}>
        This is another componenet
      </span>
      {/* <p >count is : {count} </p> */}
      <p >count is : minE </p>
    </div>
  )
});