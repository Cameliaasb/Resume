import React, { useEffect, useState } from 'react';
import { callGithubAPI } from './GithubAPI';
import Languages from './Languages';
import Card from './Card';


const ProjectsAPI = () => {

  // get all starred repos in my github
  const url = "https://api.github.com/users/Cameliaasb/starred"
  const [data, setData] = useState([])
  useEffect(() => {
    callGithubAPI(url)
      .then((response) => setData(response.data))
  }, [])

  return (
    <div>
      <div className='intro'>
        This content is dynamically generated using the GitHub API.
        Feel free to click on any card to be redirected to the corresponding GitHub repository for more details and contributions
      </div>
      <div className="two-cols">
        {
          data
            .map((project) => (
              <Card key={project.id}
                project={project}
                // languages are in different URL, so a second API call is made
                languages={<Languages url={project.languages_url} />}
                topics={project.topics}
              />
            ))
        }
      </div>
    </div>
  );
};

export default ProjectsAPI;
