import { useState,useEffect } from "react";

export const TitleEfect =()=>{
  const [count , setcount] = useState(0);
  const [blank,setBlank] = useState(12)
  // const [isHovered,setToHover] = useState(false)

  // const style={
  //   cursor: 'pointer',
  //   color: isHovered ? 'blue' : 'black',
  //   transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  //   backgroundColor: isHovered ? '#ffffff': '#ebafaf',
  //   transition: '0.3s ease'
  // }

  useEffect(()=>{
    console.log('salam'+count)
    count===0 ?  (document.title = `chats`) : (document.title = `chats(${count})`)
  },[count])

  useEffect(()=>{
    console.log(`single useEffect${blank}`)
    
  },[blank]);

  
  console.log('-> outer ka salam')

  return (
    <>
    {/* style={style} onMouseEnter={()=>setToHover(true)} onMouseLeave={()=>setToHover(false)} */}
      <h1 style={{cursor:'pointer'}} onClick={()=>setcount(count+1)}>this is UseEffect</h1>
      <button onClick={()=> setBlank(blank+12)}> BTN </button>
    </>
  )
}