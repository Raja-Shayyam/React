import { GloablHook } from "./store/context"



export const Header = ({ setShow }) => {
  const{mycarts}=GloablHook()
 const a =mycarts.length

  return (
    <header className="fixed-top position-fixed">
      <div className="px-3 py-2 text-bg-dark border-bottom ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              {/* Replace with your SVG or icon */}
            </a>
            <ul className="nav col-12 justify-content-evenly my-2 justify-content-center my-md-0 text-small">
              <li>
                <a className="nav-link text-white btn cursor-pointer" onClick={() => {
                  
                  setShow(false)
                }}>
                  {/* Replace with your SVG or icon */}

                  Home 🏡
                </a>
              </li>
              <li>
                <a  className="nav-link text-white btn cursor-pointer">

                  Dashboard 📅
                </a>
              </li>
              <li>
                <a className="nav-link text-white btn cursor-pointer">

                  Orders 📙
                </a>
              </li>
              <li>
                <a  className="nav-link text-white btn cursor-pointer">

                  Products 🚂
                </a>
              </li>
              <li>
                <a className="nav-link text-white btn cursor-pointer" onClick={() => { setShow(true) }}>

                  Carts 🛒<sup className="m-1 p-1  rounded-pill text-danger bg-warning fw-bold">{a}</sup>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </div>
      </div> */}
    </header>
  )
}
