import React, { useEffect, useState } from 'react';
import Languages from './Languages';
import { callGithubAPI } from './GithubAPI';


const ProjectsAPI = () => {
  const url = "https://api.github.com/users/Cameliaasb/starred"

  const [data, setData] = useState([])
  useEffect(() => {
    callGithubAPI(url)
      .then((response) => setData(response.data))
  }, [])


  return (
    <div>
      {
        data.map((project) => (
          <div key={project.name}>
            {
              project.name
            }
            <Languages url={project.languages_url} />
          </div>
        ))
      }

    </div>
  );
};

export default ProjectsAPI;
