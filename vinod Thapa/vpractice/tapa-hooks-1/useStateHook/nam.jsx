import { useState } from "react";

export const Name =()=>{
  const [initial_val , setTo_iv] = useState('This is Abdul muqeet')

  const seting =(n)=>{
    n==='This is Abdul muqeet' ? setTo_iv(' Abdul mughees'): setTo_iv('This is Abdul muqeet')
  }
    return (<>
    <h1>{initial_val} ; and its my name</h1>
    <button onClick={()=>seting(initial_val)}>cLick</button> 
    {/* if want to pass value as function tehn do that ow simple call onClick={seting}  */}

  </>);

}