import React from 'react'
import { FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { SearchUser } from './searchUser';


export const Slidbar = () => {
  console.log('header');
  
  return (
    <header>
      {/* Panel Heading */}
      <div className="card-header panel-heading">
        <div className="row align-items-center">
          {/* Search Form (left side) */}
          <SearchUser />

          {/* Buttons (right side) */}
          <div className="col-md-4 text-end">
            <NavLink to="/NewUser">
              <span className="btn btn-primary btn-sm me-2">
                <i className="fa fa-user"></i> Add new user
              </span>
            </NavLink>
            <NavLink to="/">
              <span className="btn btn-primary btn-sm">
                <i className="fa fa-home"></i> Home
              </span>
            </NavLink>
          </div>
        </div>
      </div>


    </header>
  )
}
