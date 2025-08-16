import { NavLink } from 'react-router-dom'

export const Heder = () => {
  return (
    <header style={{ padding: "8px", border: "1px solid gray", marginBottom: '8px' }}>
      
        <NavLink to="/">
          mainPage
        </NavLink>
        <NavLink to="/Home">
          Home ----- page
        </NavLink>
        <NavLink to="/About">
          About ------ page
        </NavLink>
        <NavLink to="/Login">
          Login ------ page
        </NavLink>
        <NavLink to="/Contact">
          Contact ------ page
        </NavLink>
    
    </header>
  )
}



export const Footer = () => {
  return (
    <div style={{ padding: "8px", border: "1px solid gray", marginTop: '15px' }}>
      Footer
    </div>
  )
}
