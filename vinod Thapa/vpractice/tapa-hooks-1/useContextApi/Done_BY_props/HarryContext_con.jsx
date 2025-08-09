import {useState} from 'react'
import { C1omp } from './1Comp';

export const Harry__props_Context_con = () => {
  const [count,setcount] = useState(0);
  return (<>
    <h2><div>HarryContext_con</div>
    <span>Done by prop Drilling </span> <br />
    <button onClick={()=>{setcount(count+1)}}> Click-to-UP </button>
    <hr /><span>this is upGarted Vale {count}</span>
    </h2>
    <hr />
    <div className='c1'>
      <C1omp count={count}/>
    </div>
  </>)
}

