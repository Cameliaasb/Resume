import React, { useEffect, useState } from 'react';
import { callGithubAPI } from './GithubAPI';

const Languages = ({ url }) => {

  const [data, setData] = useState([])
  useEffect(() => {
    callGithubAPI(url)
      .then((response) => setData(response.data))
  })

  return (
    <div>
      {
        Object.keys(data).map((language) => (
          <span key={language}> {language} </span>
        ))
      }
    </div>
  );
};

export default Languages;
