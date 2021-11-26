import React from 'react';
import { Link } from 'react-router-dom';

import { Container,Navbar,Nav } from 'react-bootstrap';
import './Header.css'

const Header = () => {
  
    return (
        <div className="w-100 p-3">
            <div>
                <h3 className="site-name">Learning Blended System</h3>
            </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>About US</Link>
                <Link to="/service" style={{ textDecoration: 'none' }}>Services</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </nav>
      </div>
    );
};

export default Header;