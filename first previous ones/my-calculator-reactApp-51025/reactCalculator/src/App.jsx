import { useState } from "react";
import Container from "./components/container";
import Display from "./components/display";
import Button from "./components/buttons";

function App()
{
  
  let [Idisplay , setDisplay] = useState('0')
  
  let i=90 
  let m= 88888870-099999998;
  const cli=(e)=>{
    console.log(e)
    let nums = e ;

    console.log(Idisplay)
      // setDisplay(nums)
      // let newAry=[...Idisplay , nums];
      // console.log('new ', newAry)
    
    if(nums === 'C'){
      setDisplay('')
    }
    else if(nums === '='){
      // if(Idisplay[0] == '0'){
      //   Idisplay[0]=''
      //   console.log('[0]  ',Idisplay[0])
      // }
      let temp = eval(Idisplay);
      // console.log('tem ',temp)
      setDisplay(temp);
    }
    else
    {
      let newval = Idisplay + nums ;
       setDisplay(newval);
    }
  }
  return(
    <Container >
    <Display dsply={Idisplay}></Display>
    <Button clicked={cli}></Button>
    </Container>
  );
}


export default App;