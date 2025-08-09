import { useRef, useState , useEffect} from "react";


export const HaryConcept =()=>{
  const [count , setCount] = useState(0);
  const a = useRef(0);
  
  function run(){
    a.current=a.current+1;
    console.log(`Value of A = ${a.current}`);
  }
  
  return(<>
    <div>
      <h1> This is useRef Hook </h1>
      <h3>A on page with value {a.current}</h3>
      <button onClick={()=>{run() ; setCount(count+1)}}> Clicked  me -- {count}</button>
      <hr />
      <h3>A on page with value {a.current}</h3>
    </div>   
  </>);
}



// export const HaryConcept =()=>{
//   const [count , setCount] = useState(0);
//   const a = useRef(0);
//   useEffect(()=>{
//     a.current=a.current+1;
//     console.log(`Value of A = ${a.current}`);
//   })
  
//   return(<>
//     <div>
//       <h1> This is useRef Hook </h1>
//       <h3>A on page with value {a.current}</h3>
//       <button onClick={()=>{setCount(count+1)}}> Clicked  me -- {count}</button>
//       <hr />
//       <h3>A on page with value {a.current}</h3>
//     </div>   
//   </>);
// }

