import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';


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

            <div className='copy-btn blue' onClick={copy}>
              <p> {copied ? "Copied" : ""} <FontAwesomeIcon icon={copied ? faCheck : faCopy} /></p>
            </div>
          </div>

          <div className='contact-info'><FontAwesomeIcon icon={faPhone} className="blue" /> 07 60 26 37 60</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
