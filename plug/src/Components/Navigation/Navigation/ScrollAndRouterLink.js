import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ScrollAndRouterLink = ({ to, text, isExternal }) => {
  const scrollToElement = () => {
    if (isExternal) {
      // If it's an external link, navigate using react-router
      // Replace 'external-route' with the actual route you want to navigate to
      window.location.href = '/abtBanner';
    } else {
      // If it's an internal link, scroll to the target element
      scroll.scrollTo(to, {
        spy: true,
        smooth: true,
        duration: 500,
      });
    }
  };

  return isExternal ? (
    <RouterLink to={to}>{text}</RouterLink>
  ) : (
    <ScrollLink to={to} spy={true} smooth={true} duration={500} onClick={scrollToElement}>
      {text}
    </ScrollLink>
  );
};

export default ScrollAndRouterLink;
