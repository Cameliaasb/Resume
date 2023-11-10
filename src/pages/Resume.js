import React from 'react';
import Navbar from '../components/Navbar';
import Bootcamp from '../components/Bootcamp';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Finance from '../components/Finance';
import { HashLink } from 'react-router-hash-link';


const Resume = () => {

  const sections = ["bootcamp", "education", "experience", "skills"]

  return (
    <div>
      <Navbar />
      <div className='colsm-col'>

        <div className='vertical-navbar'>
          {sections.map((section) =>
            <HashLink to={`/resume#${section}`} className='btn'
              key={section}
              scroll={el => window.scroll({ top: el.offsetTop - 100 })}
            > {section.toUpperCase()}</HashLink>
          )}
        </div>

        <div className='text'>
          <Bootcamp />
          <Education />
          <Finance />
          <Skills />
        </div>

      </div>

    </div>
  );
};

export default Resume;
