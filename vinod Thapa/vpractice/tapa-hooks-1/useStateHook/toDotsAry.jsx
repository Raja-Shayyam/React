import { useState } from "react";

export const ToDot = () => {
  const bioData = [
    { name: 'kokoo', Age: 23, Degree: 'deKe', Rollno: 323 },
    { name: 'kokoo', Age: 15, Degree: 'Ytw3', Rollno: 123 },
    { name: 'kokoo', Age: 21, Degree: 'gh#@', Rollno: 523 }
  ]
  const [initial_Obj, setTo_Iobj] = useState(bioData)

  const seting = () => {
    // setTo_Iobj({ ...initial_Obj , name:'monA' , Rollno:565})
    // for it ...
    // <h1>Degree: {initial_Obj.Degree} at Age: {initial_Obj.Age} ; and my name is :{">>"} {initial_Obj.name} Rollno.{initial_Obj.Rollno}</h1>

    setTo_Iobj([{ name: 'roko', Age: 31, Degree: 'moP0', Rollno: 333 }])

  }

  const clearing = ()=>{
    setTo_Iobj([]);
  }

  return (<>
    {
      initial_Obj.map((Obj, i) => ( // if dont use you any ( brackets ) then .map(()=>{return( all )})
        
          <h1 key={i++}>
            { i++ + '- ' }  Degree: {Obj.Degree} at Age: {Obj.Age} ; and my name is :{">>"} {Obj.name} Rollno.{Obj.Rollno}
          </h1>
        
      ))
    }
    <button onClick={seting}>Its clickAble</button>
    <button onClick={clearing}>-- Clear --</button>
  </>);

}