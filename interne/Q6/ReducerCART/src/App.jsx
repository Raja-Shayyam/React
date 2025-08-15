import { useState } from "react"
import { Header } from '../components/Header'
import { Homestore } from '../components/Homestore'
import { Cart } from "../components/Cart"


function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <Header setShow={setShow}/>
      {show ? <Cart/>:
      <Homestore />}
    </>
  )
}

export default App
