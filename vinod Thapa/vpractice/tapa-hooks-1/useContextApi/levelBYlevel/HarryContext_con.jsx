import { useState } from 'react'
import { CounterVcontext } from './Store/context';
import { C1omp } from './1Comp';

export const HarryContext = () => {
  const [count, setcount] = useState(5);
  return (<>
    <CounterVcontext.Provider value={{count,setcount}}>
      <h2>
        <p style={{textDecoration: 'underline dotted blue'}}>Its all my Logic and Design </p>
        <div>HarryContext_con</div>
        <button onClick={() => { setcount(count + 1) }}> Click-to-UP </button>
        <hr /><span>this is upGarted Vale {count}</span>
      </h2>
      <hr />
      <div className='c1'>
        <C1omp count={count} />
      </div>
    </CounterVcontext.Provider>
  </>)
}

