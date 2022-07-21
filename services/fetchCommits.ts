import { Octokit } from '@octokit/core';

export const fetchCommits = async (
  client: Octokit,
  repo = 'urban-octo-engine'
) => {
  const response = await client.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'Carduelis',
    repo,
  });
  return response.data.map((item) => item.commit);
};
