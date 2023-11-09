import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Card = ({ project, languages, topics }) => {
  return (
    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={`card text`} >

      <h3> {project.name} </h3>
      <div className='pills'>
        {languages}
        {topics.map((topic) => <div className='pill'> {topic} </div>)}
      </div>
      <div>{project.description} </div>

      {project.homepage && (
        <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="clickable">
          <b> <FontAwesomeIcon icon={faArrowRight} /> See deployed project </b>
          <p>test@gmail.com - azerty</p>
        </a>
      )}


    </a>
  );
};

export default Card;
