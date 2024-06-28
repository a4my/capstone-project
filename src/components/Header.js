// Header.js
import React from 'react';
import logo from '../assets/little-lemon-logo.jpg'; // Ensure you have the logo image in the appropriate directory

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
