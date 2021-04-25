import React, { useState } from "react";
import {NavHashLink} from 'react-router-hash-link'

import './navbar.css'

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    
      <nav className="navbar">
        
        <NavHashLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
        Kox Systems
        </NavHashLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            
          </li>
          <li className="nav-item">
            <NavHashLink smooth to="/#home" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavHashLink>
          </li>

          <li className="nav-item">
            <NavHashLink smooth to="/#staffing" className="nav-links" onClick={closeMobileMenu}>
              Staffing
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
             smooth to="/#services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </NavHashLink>
          </li>
          

          <li className="nav-item">
            <NavHashLink
              to="/career"
              className="nav-links"
              onClick={closeMobileMenu}
            >
            Career Readiness resources
            </NavHashLink>
          </li>

          <li className="nav-item">
            <NavHashLink
             smooth to="/#locations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Locations
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
             smooth to="/#contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact us
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
