import React, { useRef, useState } from 'react'

export const Form = () => {
  let data={
    name:'kokoo',
    password:'145'
  }

  const myNMref = useRef()
  const myPWref = useRef()
  const [isLog , setlog] =  useState(false)
  // const [name , setname] = useState('')

  const settingData=(e)=>{
    e.preventDefault();
    console.log('salam' , myNMref.current.value);
    if(myPWref.current.value == data.password){
      setlog(true)
    }
    
  }

  return (
    <div>
      <form action="" onSubmit={settingData}> 
        <h2>Form</h2>
        <label htmlFor="nm"/>Entre Name <input type="text" ref={myNMref} />
        <br />
        <label htmlFor="pw"/>Entre Password <input type="password" ref={myPWref} />
        <hr />
        <button>Submit</button>
      </form>
      {isLog && <h3>Sucessfull Logined is {data.name} with password {data.password}</h3>}
    </div>
  )
}
