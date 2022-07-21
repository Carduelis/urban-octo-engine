import { Octokit } from '@octokit/core';

export const createOctoClient = () => {
  return new Octokit({
    auth: process.env.PRIVATE_GITHUB_PERSONAL_ACCESS_KEY,
  });
};
