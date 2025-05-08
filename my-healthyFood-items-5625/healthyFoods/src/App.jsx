//import React from "react";
import Container from '../src/components/Container'
import { Heading } from "./components/heading";
import { List } from "./components/list";
import { Error } from "./components/errorMsg";
import InputField from './components/inputField';
import './App.css'

function App()
{
  // # v1.3 under->
// # this is parent directory and have all data acess ...
  let foodItems = ['dall','green Vegitable','Egg','Meat' , 'Date'];
  let textoShow = 'here is entred innerText ... ';
  const Onchange = (e)=>{
    console.log(">>| ", e.target.value)
    textoShow = e.target.value;
}
  //let foodItems = [];

// # v1.1 under->
// components are in it .


// # v1.2 under->
// fragments also in it
// aslo we can write <> ... codes ... </>
//then we should not need to write statement at line 1.
/**
 * return (
    <React.Fragment> 
      <Heading/> 
      <Error Items={foodItems}></Error>
      <List Items={foodItems}></List>
    </React.Fragment>
  );
 */

// # v1.4 under->
  return (
    <>
    <Container>
      <Heading/> 
      <InputField Onchange={Onchange}></InputField>
      <p id='para'>{textoShow}</p>
      <Error Items={foodItems}></Error>
      <List Items={foodItems}></List>
    </Container>

    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores, nulla quasi accusantium accusamus minima nisi consequuntur esse necessitatibus maxime id. Maxime, sit porro repellendus voluptatem enim culpa non quod?
    </Container>
    </>
  );
}

export default App;