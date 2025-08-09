import { useContext } from 'react'
import { C2omp } from './2Comp'
import { CounterVcontext } from './Store/context'

export const C1omp = () => {
  const setValue = useContext(CounterVcontext)
  return (
    <div>
      <h4>1 - Comp</h4>
      <button>
        <span onClick={()=>{setValue.setcount(setValue.count-1)}}> Value with -1 : {setValue.count}</span>
      </button>
      <C2omp />
    </div>

  )
}
