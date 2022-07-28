import { createOctoClient } from "./createOctoClient";
import { fetchCommits } from "./fetchCommits";
import { Commit } from "./types";
import { Fetcher } from "swr";

export const clientCommitsFetcher: Fetcher<Commit[], string> = async (key) => {
  const client = createOctoClient(key);
  const commits = await fetchCommits(client);
  return commits;
};
