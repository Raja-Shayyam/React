import { useState } from "react";

export const RmFun = () => {
  const bioData = [
    { i:1 ,name: 'kokoo', Age: 23, Degree: 'deKe', Rollno: 323 },
    { i:2 ,name: 'kokoo', Age: 15, Degree: 'Ytw3', Rollno: 123 },
    { i:3 ,name: 'xokoo', Age: 21, Degree: 'gh#@', Rollno: 523 },
    { i:4 ,name: 'gokoo', Age: 25, Degree: '4f#@', Rollno: 533 },
    { i:5 ,name: 'sokoo', Age: 22, Degree: 'fh#@', Rollno: 233 },
    
  ]
  const [initial_Obj, setTo_Iobj] = useState(bioData)

  const seting = () => {

    setTo_Iobj([{ i:4 ,name: 'roko', Age: 31, Degree: 'moP0', Rollno: 333 }])

  }

  const clearing = ()=>{
    setTo_Iobj([]);
  }

  const RemoveBtn =(id)=>{
    alert('its id '+ id);
    const newAry = initial_Obj.filter((havingId)=> {return havingId.i !==id} )
    setTo_Iobj(newAry)
  }

  return (<>
    {
      initial_Obj.map((Obj) => ( // if dont use you any ( brackets ) then .map(()=>{return( all )})
        
          <h1 key={Obj.i}>
            { Obj.i + '- ' }  Degree: {Obj.Degree} at Age: {Obj.Age} ; and my name is :{">>"} {Obj.name} Rollno.{Obj.Rollno}
            <button className='RemoveBtn' onClick={()=>{RemoveBtn(Obj.i)}}> Remove </button>
          </h1>
        
      ))
    }
    <button onClick={seting}>Its clickAble</button>
    <button onClick={clearing}>-- Clear --</button>
  </>);

}