import { useState } from 'react'
import { Slidbar } from '../components/sidebar'
import { Home } from '../pages/Home'
import { Newuser } from '../pages/Newuser'
import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"
import { EditUser } from '../pages/EditUser'

function App() {
  // const [myuser, setuser] = useState([])
  
  
  return (
    <><div className="container">
      <div className="row text-center">
        <h1 className="white">ren - chart</h1>
      </div>
      {/* style={{width:'80%'}} */}
      <div className="row">
        <div className="offset-md-1 col-md-10" style={{ width: "fit-content" }}>
          <div className="card panel">

            <BrowserRouter>

              <Slidbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/NewUser" element={<Newuser/>} />
                <Route path="/editUser" element={<EditUser />} />
              </Routes>

            </BrowserRouter>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App