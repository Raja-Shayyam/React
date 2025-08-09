import { useContext } from "react"
import { CounterVcontext } from "./Store/context"

export const C4omp = () => {
  const counter = useContext(CounterVcontext)
   return (
      <div className="c4">
        <h6>4 - Comp</h6>
      <button>
        <span onClick={()=>{counter.setcount(counter.count-4)}}> Value with -4 : {counter.count}</span>
      </button>
      </div>
  
    )
}
