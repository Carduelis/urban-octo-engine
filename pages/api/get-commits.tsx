import { createOctoClient } from 'services/createOctoClient';
import { fetchCommits } from 'services/fetchCommits';

export default async function handler(req, res) {
  const octokit = createOctoClient();
  const commits = await fetchCommits(octokit);
  res.status(200).json(commits);
}
