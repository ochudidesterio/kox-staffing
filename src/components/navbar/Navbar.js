import React, { useState } from "react";
import { Link } from "react-router-dom";

import './navbar.css'

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    
      <nav className="navbar">
        
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Cox Systems
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/staffing" className="nav-links" onClick={closeMobileMenu}>
              Staffing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          

          <li className="nav-item">
            <Link
              to="/career"
              className="nav-links"
              onClick={closeMobileMenu}
            >
            Career Readiness resources
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/locations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/more"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              More
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
