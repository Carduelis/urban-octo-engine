import { Octokit } from "@octokit/core";

export const createOctoClient = (personalAccessKey?: string) => {
  return new Octokit({
    auth: personalAccessKey ?? process.env.PRIVATE_GITHUB_PERSONAL_ACCESS_KEY,
  });
};
