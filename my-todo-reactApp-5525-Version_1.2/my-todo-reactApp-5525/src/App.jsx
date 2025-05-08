import Title from "./components/title"
import { List } from "./components/list_items";
import { HeadingList } from "./components/listHeadings";
import { Fragment } from "react";
import './App.css'

function App()
{
  let mytoDos = 
  [
    {
      name : 'buy milk',
      dueDate : '2/3/12'
    },
    {
      name : 'Go to university',
      dueDate : '2/1/23'
    },
    {
      name : 'Go for Amina',
      dueDate : '2/1/25'
    }
  ]  

  console.log(mytoDos)

  return <Fragment>
    <Title></Title>
    <HeadingList></HeadingList>
    <List toDo={mytoDos}></List>
  </Fragment>


}

export default App;