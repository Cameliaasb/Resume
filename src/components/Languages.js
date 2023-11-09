import { useEffect, useState }  from 'react';
import { callGithubAPI }        from './GithubAPI';

const Languages = ({ url }) => {
  // languages used in repo are stored in URL, so a second API call is needed

  const [projectLanguages, setProjectLanguagees] = useState([])
  useEffect(() => {
    callGithubAPI(url)
      .then((response) => setProjectLanguagees(response.data))
  })

  return (
    Object.keys(projectLanguages).map((key) => <div className='pill'> {key} </div>)
  );
};

export default Languages;
