import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Card = ({ project, languages, topics }) => {
  return (

    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={`card text`} >

      <h3> {project.name} </h3>
      <div className='pills'>
        {languages}
        {topics.map((topic, index) => <div className='pill' key={index}> {topic} </div>)}
      </div>
      <div>{project.description} </div>

    </a>

  );
};

export default Card;
