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

export interface Commit {
  url: string;
  author: {
    name?: string;
    email?: string;
    date?: string;
  };
  committer: {
    name?: string;
    email?: string;
    date?: string;
  };
  message: string;
  comment_count: number;
}
