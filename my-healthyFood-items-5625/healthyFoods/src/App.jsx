import React, { useState } from "react";
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
  let [foodItems , setFoodItems] = useState([
    'dall','green Vegitable','Egg','Meat' , 'Date'
  ]);
  var textoShow='here is entred innerText ... ';


  //let [textoShow , seTextState ] = useState("here is entred innerText ... ");
  // # this is real method and working of useState ...
  // let textStateArry = useState("here is entred innerText ... ")
  // let textoShow = textStateArry[0];
  // let seTextState = textStateArry[1];
  // const Onchange = (e)=>{
  const Onkeyclick = (e)=>{
    // let NewChiz= e.target.value;
    //console.log(">>| ", e)// ... # to check out 
    // e.key = ? : that is "Enter" sp appling check .
    if(e.key === 'Enter')
    {
      console.log(">>| ", e.target.value)
      textoShow = (e.target.value) ;
      let Newary = [...foodItems , textoShow];
      setFoodItems( Newary);
      e.target.value='';
      //seTextState( e.target.value);
      //console.log(textoShow)
      //setFoodItems = textoShow;
    }
    // console.log('} '+NewChiz)
    // foodItems.push(NewChiz)
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
      <InputField onkeydown={Onkeyclick}></InputField>
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