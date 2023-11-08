import { useEffect, useState } from 'react';
import { callGithubAPI } from './GithubAPI';

const Languages = ({ url }) => {

  const [data, setData] = useState([])
  useEffect(() => {
    callGithubAPI(url)
      .then((response) => setData(response.data))
  })

  return (
        Object.keys(data)
  );
};

export default Languages;
