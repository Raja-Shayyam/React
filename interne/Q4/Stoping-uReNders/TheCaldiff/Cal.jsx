import React, { useMemo, useState } from 'react'


const longMul = (i) => {


  // Case 1: From (u - 2) = 0
  const u1 = 200;

  // Case 2: From (u^2 - 12) = 0
  const u2 = Math.sqrt(i * 3);
  

  // u must be non-negative because u = sqrt(x + 4).
  // Therefore, we only use u1 and u2.
  const validUValues = [u1, u2];

  // We solve for x using the relation x = u^2 - 4.
  
  let element = 0
  for (let index = 0; index < 1000; index++) {
    element += index ;
    element+=u2;
    console.log(element);
    
  }
  return element;


};



export const Cal = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  // const Doubble = useMemo(()=>{(longMul(count1))},[count1])
  const Doubble = useMemo(() => longMul(count1), [count1]);
  // const Doubble =longMul(count1)

  const seting1count = () => {
    setCount1(count1 + 1)
  }

  return (<>
    <div>
      <p>{count1} ||  {Doubble}</p>
      <button onClick={seting1count}>Increment</button>
    </div>
    <div>
      <p>{count2} </p>
      <button onClick={() => { setCount2(count2 + 1) }}>litte Increment</button>
    </div>
  </>)
}
