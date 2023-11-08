import React, { useEffect, useState } from 'react';
import Languages from './Languages';
import Card from './Card';
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
        data.map((project, index) => (
          <Card key={project.id}
            project={project}
            languages={<Languages url={project.languages_url} />} />
        ))
      }

    </div>
  );
};

export default ProjectsAPI;
