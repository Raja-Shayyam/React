import { useState } from 'react'
import { data } from '../store/dataapi'
import DynamicForm from '../components/Showingtest'
import { FormDynamics } from '../components/FormDynamics'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(data);
  
  return (
    <>
      <div className="card">
        <DynamicForm/> 
        <FormDynamics/>
      </div>
    </>
  )
}

export default App
