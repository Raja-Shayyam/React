import { C2omp } from './2Comp'

export const C1omp = ({count}) => {
  return (
    <div>
      <h4>1 - Comp</h4>
      <span> Value with -1 : {count-1}</span>
      <C2omp count={count}/>
    </div>

  )
}
