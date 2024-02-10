import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

import './Navbar.css';

const Nav2 = () => {
  return (
    <div>
      <nav className="NavbarItems">
        <Link to="/" className="back-link" style={{color:'white'}}> 
          <FaArrowLeft className="back-icon" style={{color:'white'}} />HOME
        </Link>
        <h1 className="navbar-logo">EVENTOS</h1>
      </nav>
    </div>
  );
}

export default Nav2;
