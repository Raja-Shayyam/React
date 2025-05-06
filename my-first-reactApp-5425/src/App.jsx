import { MyButton } from "./my_components/KgButton";
import { Hi_hello } from "./my_components/hello";
import Random from "./my_components/random_number";

function App()
{
  return <div>
    <Hi_hello></Hi_hello>
    <h2>this is first heading on react by KgCoding</h2>
    <MyButton></MyButton>
    <button >this is declared on App.jsx</button>

    <Random/>
    <Random/> 
    <Random/> 
    <Random/> 
    <Random/> 

  </div>
//    <Random/>  this is also type of declaration ;

}

export default App;







/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo " alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/