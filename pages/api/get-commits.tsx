// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Octokit } from '@octokit/core';

export default async function handler(req, res) {
  const octokit = new Octokit({
    auth: process.env.PRIVATE_GITHUB_PERSONAL_ACCESS_KEY,
  });

  const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'Carduelis',
    repo: 'urban-octo-engine',
  });
  res.status(200).json(response.data.map((item) => item.commit));
}
