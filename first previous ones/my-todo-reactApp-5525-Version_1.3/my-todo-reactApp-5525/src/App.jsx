// 8 hours virtual doom concept 
import Container from "./components/Container";
import Title from "./components/title"
import { List } from "./components/list_items";
import { HeadingList } from "./components/listHeadings";
import { Eror } from "./components/Error";
import { Fragment, useState } from "react";
import './App.css'

function App()
{
  let Itodo = 
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

  

  let [mytoDos , setmytoDos] = useState(Itodo);

  const clickEventfunctoin =(myTask , myDuedate)=>{
    console.log(`my task '${myTask}'    my due data '${myDuedate}' .`);

    let newAry = [...mytoDos , {
      name : myTask,
      dueDate : myDuedate
    }]

    setmytoDos(newAry);
  }

  const delete_btn=(itm)=>{
    console.log(`deleted ${itm}.`)
    // let newArry = mytoDos.filter(item=> item.name !== itm );
    let newArry = mytoDos.filter((item)=>{
      return item.name !== itm 
    });

    setmytoDos(newArry);
  }



  return <Fragment>
  <Container>
    <Title></Title>
    <HeadingList clickEvent={clickEventfunctoin}>
    </HeadingList>
    {mytoDos.length === 0 &&  <Eror></Eror>}
    <List toDo={mytoDos}
      onDelete_btn={delete_btn}
    ></List>
    p
  </Container>  
  </Fragment>


}

export default App;