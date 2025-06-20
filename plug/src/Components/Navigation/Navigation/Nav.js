import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpeg';
import './Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAbout = () => {
    if (location.pathname === '/') {
      ScrollLink.scrollTo('abtHead', {
        spy: true,
        smooth: true,
        duration: 500,
      });
    } else {
      navigate('/', { state: { scrollTo: 'abtHead' } });
    }
  };

  useEffect(() => {
    if (location.hash === '#abtBanner') {
      ScrollLink.scrollTo('abtBanner', {
        spy: true,
        smooth: true,
        duration: 500,
      });
    }
  }, [location.hash]);


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" className="link" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          {location.pathname === '/' && ( // Render "About" only on the home page
            <li>
              <ScrollLink to='About' spy={true} smooth={true} duration={500} className="link">
                About
              </ScrollLink>
            </li>
          )}
          
          <li>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'active' : ''}`} />
        <div className={`bar ${isOpen ? 'active' : ''}`} />
        <div className={`bar ${isOpen ? 'active' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
