import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <NavLink to="/bio"> Bio</NavLink>
      <NavLink to="/projects"> Projects</NavLink>
      <NavLink to="/resume"> Resume </NavLink>
      <NavLink to="/contact"> Contact</NavLink>
    </div>
  );
};

export default Navbar;
