import { Salam } from "./salam";

export function Hi_hello()
{
  let name = 'muqeet rehan';
  let  fullName = ()=>{
    return 'raja rehan';
  }

//  {'<'}= this should be declare dynamicaly other wise error 
  return <div>
    <Salam value={name}/>
    <h4>this name is showing through function {'=> ' + fullName() + ' <='} .</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum iure aspernatur sapiente libero </p>
    
  </div>;
  
}