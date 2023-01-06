import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss";
const index = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
               <ul className="navbar-nav ">
                  <li className="nav-item active">
                     <NavLink className="nav-link" to="/">Add user</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/todos" >Users</NavLink>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   )
};

export default index;