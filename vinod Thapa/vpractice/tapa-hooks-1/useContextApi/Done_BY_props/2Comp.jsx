import { C3omp } from "./3Comp"

export const C2omp = ({count}) => {
  return (
    <div className="c2">
      <h5>2 - Comp</h5>
      <span> Value with -2 : {count-2}</span>
      <C3omp count={count}/>
    </div>
  )
}
