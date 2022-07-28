import { CommitsList } from "components/CommitsList";
import { Header } from "components/Header";
import { FC } from "react";
import { Commit } from "services/types";
import { SWRResponse } from "swr";

export const CommitsView: FC<SWRResponse<Commit[], any>> = ({
  error,
  data: commits,
}) => {
  if (error) {
    console.log(error);
    return <span>Error</span>;
  }
  if (!commits) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <Header
        totalCommits={commits.length}
        repositoryLink="https://github.com/Carduelis/urban-octo-engine"
      />
      <CommitsList commits={commits} />
    </>
  );
};
