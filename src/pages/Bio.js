import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Bio = () => {
  return (

    <div>
      <Navbar />
      <div className="two-cols">
        <div className="mask">
          <img src="picture.jpg" alt="resume" width="320px" className="cover" />

        </div>

        <div className='text'>
          <h2> I'm Camelia, a Full-stack Developer.  </h2>

          <p>
            Transitioned from a career as a financial analyst after attending <b><a href="https://www.lewagon.com/fr" target="_blank" rel="noopener noreferrer">Le Wagon</a></b>'s web development bootcamp with a newfound passion for coding.
          </p>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} className="blue"/> ESCP Europe and La Sorbonne graduate with enriching international exchange experiences.
          </p>
          <p>
            <FontAwesomeIcon icon={faBolt} className="blue"/> Passionate about continuous learning and bringing a unique skill set to every project.
          </p>

          <p>
            Feel free to connect with me on <b><a href="https://www.linkedin.com/in/cameliaasb/" target="_blank" rel="noopener noreferrer">LinkedIn</a></b> or explore my code on <b><a href="https://github.com/Cameliaasb" target="_blank" rel="noopener noreferrer">GitHub</a></b> to learn more about my journey and experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
