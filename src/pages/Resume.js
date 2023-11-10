import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Bootcamp from '../components/Bootcamp';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Finance from '../components/Finance';


const Resume = () => {

  const sections = ["Bootcamp", "Skills", "Education", "Finance"]

  const handleClick = (section) => {
  }



  return (
    <div>
      <Navbar />
      <div className='colsm-col'>

        <div className='vertical-flex'>
          {sections.map((section, index) =>
            <div className='btn' key={section} onClick={handleClick()} >
              {section}
            </div>
          )}
        </div>

        <div className='text'>
          <Bootcamp />
          <Skills />
          <Education />
          <Finance />
        </div>

      </div>

    </div>
  );
};

export default Resume;
