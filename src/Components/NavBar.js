import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
 
  <Link className="navbar-brand" to="/">Navbar</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
        
        </>
    )
}

export default NavBar