import { lazy, Suspense, useState } from "react"
import { Header } from '../components/Header'
import { Homestore } from '../components/Homestore'
// import { Cart } from "../components/Cart"
// const Cart = lazy(() => import('../components/Cart'))
const Cart = lazy(() =>
  import('../components/Cart').then(module => ({ default: module.Cart }))
);


function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <Header setShow={setShow} />
      {
        show ? 
          <Suspense><Cart /></Suspense>
          
          :
          <Homestore />
      }
    </>
  )
}

export default App
