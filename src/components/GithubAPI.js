import axios from 'axios';

export const callGithubAPI = (url) => {
  return axios.get(url, {
    headers: {
      Authorization: process.env.REACT_APP_GH,
    },
  });
};
