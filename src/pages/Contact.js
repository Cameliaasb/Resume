import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ResumeFR from '../components/files/ResumeFR.pdf';
import ResumeENG from '../components/files/ResumeENG.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheck, faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("camelia.assobhei@gmail.com");
    setCopied(true)
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Contact Me</h2>

        <div className="contact-infos">
          <div className='contact-info'>
            <FontAwesomeIcon icon={faEnvelope} className="blue" /> <a href="mailto:camelia.assobhei@gmail.com">camelia.assobhei@gmail.com</a>

            <div className='btn blue' onClick={copy}>
              <p> {copied ? "Copied" : ""} <FontAwesomeIcon icon={copied ? faCheck : faCopy} /></p>
            </div>
          </div>

          <div className='contact-info'><FontAwesomeIcon icon={faPhone} className="blue" /> 07 60 26 37 60</div>

        </div>


        <h2> Download my Resume</h2>
        <div className="contact-infos">
          <a href={ResumeFR} alt='Downloadable Resume' className='contact-info btn' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} className="blue" /> French
          </a>
          <a href={ResumeENG} alt='Downloadable Resume' className='contact-info btn' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} className="blue" /> English
          </a>
        </div>


      </div>
    </div>
  );
};

export default Contact;
