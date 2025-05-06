import React from "react";
import { Heading } from "./components/heading";
import { List } from "./components/list";
import { Error } from "./components/errorMsg";
import './App.css'

function App()
{
// # this is parent directory and have all data acess ...
  let foodItems = ['dall','green Vegitable','Egg','Meat' , 'Date'];
  //let foodItems = [];
  


// aslo we can write <> ... codes ... </>
//then we should not need to write statement at line 1.
  return (
    <React.Fragment> 
      <Heading/> 
      <Error Items={foodItems}></Error>
      <List Items={foodItems}></List>
    </React.Fragment>
  );
}

export default App;