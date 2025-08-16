import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
// import { Home } from "../components/Home"
// import { Contact } from "../components/Contact"
// import { About } from "../components/About"
import { Login } from "../components/Login"
import { Footer, Heder } from "../components/HFmy"
import { lazy, Suspense } from "react"

// const Contact = lazy(() => wait(2000).then(()=>{import("../components/Contact") }))
const Contact = lazy(() =>
  import("../components/Contact").then(module => ({
    default: module.Contact
  }))
);

const Home = lazy(() =>
  import("../components/Home").then(module => ({
    default: module.Home
  }))
);

const About = lazy(() =>
  import("../components/About").then(module => ({
    default: module.About
  }))
);


// const About = lazy(() => { import("../components/About") })

function App() {


  return (<>
    <BrowserRouter>
      <Heder />
      <Suspense fallback={'load ...'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  </>)
}

export default App
