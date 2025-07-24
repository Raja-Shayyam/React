import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsAmd } from "react-icons/bs";


export const Footer = ()=>{
  return<>
    <div className="container"> <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer-container"> <div className="col-md-4 d-flex align-items-center"> <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap"> <svg className="bi" width="30" height="24" aria-hidden="true">
        <BsAmd />
      </svg> </a> <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span> </div> <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="Instagram"><svg className="bi" width="24" height="24" aria-hidden="true">
      <FaSquareFacebook />
      <fa6/>
      </svg></a></li> <li className="ms-3"><a className="text-body-secondary" href="#" aria-label="Facebook"><svg className="bi" width="24" height="24">
        <FaSquareInstagram />
        </svg></a></li> </ul> </footer> </div>
  </>
}