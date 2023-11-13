import axios from 'axios';

export const callGithubAPI = (url) => {
  const key = process.env.REACT_APP_GH.replaceAll("?", "")

  return axios.get(url, {
    headers: {
      Authorization: 'Bearer '+ key,
      'X-GitHub-Api-Version': "2022-11-28",
    },
  }
  );
};
