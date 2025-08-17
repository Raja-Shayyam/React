import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LongData } from '../Component/LongData'
import './App.css'
import { Dumy } from '../Component/dumy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Dumy/>
        <LongData />
      </div>
    </>
  )
}

export default App
