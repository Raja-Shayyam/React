import Title from "./components/title"
import { List } from "./components/list_items";
import { HeadingList } from "./components/listHeadings";
import { Fragment } from "react";
import './App.css'

function App()
{
  
  return <Fragment>
    <Title></Title>
    <HeadingList></HeadingList>
    <List></List>
  </Fragment>


}

export default App;