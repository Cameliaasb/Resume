import React from 'react';

const Card = ({ project, languages }) => {
  return (
    <div>
      {project.name}
      {project.url}
      {project.description}
      {project.homepage}
      {languages}
    </div>
  );
};

export default Card;
