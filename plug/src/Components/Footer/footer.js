import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">    
    <div className="footer-content">
    <div className="footer-links"> 
    <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        {/* <div className="dropdown">
          <span className="dropdown-toggle">Services</span>
          <div className="dropdown-content">
            <Link to="/service1">Software QA Training</Link>
            <Link to="/service2">IT Training</Link>
            <Link to="/service3">IT consultancy</Link>
            <Link to="/service4">Software QA consultancy</Link>
          </div>
        </div> */}
        <Link to="/Contact">Contact</Link>
    </div>
    <p className='foot'>&copy; 2024 MBHOLOBOLO Developed by BlvckKing</p>
  </div>
    </footer>
  );
};

export default Footer;
