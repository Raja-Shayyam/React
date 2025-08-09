import { C4omp } from "./4Comp"

export const C3omp = ({count}) => {    
  return (
    <div className='c3'>
      <h6>3 - Comp</h6>
      <span> Value with -3 : {count-3}</span>
      <C4omp count={count}/>
    </div>    
  )
}
