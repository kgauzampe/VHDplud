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
        <Link to="/Contact">Contact</Link>
    </div>
    <p className='foot'>&copy; 2025 VHD Plug Developed by Mpumelelo Tech Solutions</p>
  </div>
    </footer>
  );
};

export default Footer;
