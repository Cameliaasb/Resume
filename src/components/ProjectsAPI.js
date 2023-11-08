import React, { useEffect, useState } from 'react';
import { callGithubAPI }              from './GithubAPI';
import Languages  from './Languages';
import Card       from './Card';


const ProjectsAPI = () => {

  // get all starred repos in my github
  const url = "https://api.github.com/users/Cameliaasb/starred"
  const [data, setData] = useState([])
  useEffect(() => {
    callGithubAPI(url)
      .then((response) => setData(response.data))
  }, [])

  return (
    <div className="container">
      {
        data
          .map((project) => (
            <Card key={project.id}
              project={project}
              languages={<Languages url={project.languages_url} />}
            />
          ))
      }
    </div>
  );
};

export default ProjectsAPI;
