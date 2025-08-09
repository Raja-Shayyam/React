import { useRef, useState } from "react";

export const Uncontrooled =()=>{
  const myName = useRef(null)
  const [showData , setShowdata] = useState('')

  const submitform=(e)=>{
    e.preventDefault();
    console.log('--> '+myName.current.value)
    setShowdata(myName.current.value)

  }
  return(<>
      <form action="" onSubmit={submitform}>
        <span>This is form start</span>
        <div>
          <label htmlFor="my-useRef_input">Entre your name below</label>
          <input type="text" id="my-useRef_input" ref={myName}/>
        </div>
        <hr />
        <button>--- submit it ---</button>
        <hr />
        <p>
          {showData ?  (<>My filed name is {<span className="show-data">{showData}</span>}</>) :'  '}
        </p>
        <span>This is form End</span>
      </form>
  </>);
}







//  #   causing issue bcz   useREF NEVER RERENDER WHOLE PAGE
// export const Uncontrooled =()=>{
//   const myName = useRef(null)
//   const [showData , setShowdata] = useState(false)

//   const submitform=(e)=>{
//     e.preventDefault();
//     console.log('--> '+myName.current.value)
//     const Name = myName.current.value
//     Name == ''? alert('plz entre this field first'): setShowdata(true) ;
//   }
//   return(<>
//       <form action="" onSubmit={submitform}>
//         <div>
//           <label htmlFor="my-useRef_input">Entre your name below</label>
//           <input type="text" id="my-useRef_input" ref={myName}/>
//         </div>
//         <hr />
//         <button>--- submit it ---</button>
//         <hr />
//         <p>
//           {showData ?  `My  filed name is ${myName.current.value}`:'  '}
//           {console.log(`****  +${myName.current}`)}
//         </p>
//       </form>
//   </>);
// }



{/*     <input type="text" value={''} onChange={(e)=>{''}} /> this is controlled way */}

{/* {showData&&<span>.{`My entred name is ${myName.current.value}`}</span>} */}