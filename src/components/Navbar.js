import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar">
      <NavLink to="/bio"        className={(nav) => (nav.isActive? "nav-active" : "")+ " nav"} > Bio       </NavLink>
      <NavLink to="/projects"   className={(nav) => (nav.isActive? "nav-active" : "")+ " nav"} > Projects  </NavLink>
      <NavLink to="/resume"     className={(nav) => (nav.isActive? "nav-active" : "")+ " nav"} > Resume    </NavLink>
      <NavLink to="/contact"    className={(nav) => (nav.isActive? "nav-active" : "")+ " nav"} > Contact   </NavLink>
    </div>
  );
};

export default Navbar;
