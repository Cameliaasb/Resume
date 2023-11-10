import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div className="navbar">
        <h3> <NavLink to="/"> Camelia </NavLink></h3>

        <div className='links'>
          <NavLink to="/"           className={(nav) => (nav.isActive? "nav-active" : "")} > BIO       </NavLink>
          <NavLink to="/projects"   className={(nav) => (nav.isActive? "nav-active" : "")} > PROJECTS  </NavLink>
          <NavLink to="/resume"     className={(nav) => (nav.isActive? "nav-active" : "")} > RESUME    </NavLink>
          <NavLink to="/contact"    className={(nav) => (nav.isActive? "nav-active" : "")} > CONTACT   </NavLink>
        </div>

        <div className="links">
          <a href="https://www.linkedin.com/in/cameliaasb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Cameliaasb" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
