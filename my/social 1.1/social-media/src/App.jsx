import './App.css'
import { Header } from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../components/Footer';
import { Form } from '../components/form';
import { SideBar } from '../components/sidebar';
import { PostList } from '../components/postList';

import { useState } from 'react';


function App() {
  const [selection,setSelection] = useState("Home");

  return (
    <>
      <SideBar selectionOnSelect={selection} selectionOnSet={setSelection}></SideBar>
      <main className='main'>
        <Header></Header>
        {
          selection === "Post" ? <PostList></PostList> : <Form></Form>
        }
       
        
        <Footer></Footer>
      </main>

    </>
  )
}

export default App;
