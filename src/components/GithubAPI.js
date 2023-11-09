import axios from 'axios';

export const callGithubAPI = (url) => {
  return axios.get(url, {
    headers: {
      Authorization: 'Bearer '+process.env.REACT_APP_GH,
      'X-GitHub-Api-Version': "2022-11-28",
    },
  });
};
