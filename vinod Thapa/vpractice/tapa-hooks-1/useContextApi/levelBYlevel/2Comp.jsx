import { C3omp } from "./3Comp"
import { useContext } from "react"
import { CounterVcontext } from "./Store/context"

export const C2omp = () => {
  const myCounter = useContext(CounterVcontext)
  return (
    <div className="c2">
      <h5>2 - Comp</h5>
      <button>
        <span onClick={()=>{myCounter.setcount(myCounter.count-2)}}> Value with -2 : {myCounter.count}</span>
      </button>
      <C3omp />
    </div>
  )
}
