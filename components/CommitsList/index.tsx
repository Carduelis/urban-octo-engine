import { CommitCard } from "components/CommitCard";
import { FC } from "react";
import { Commit } from "services/types";
import styles from "./CommitsList.module.css";

export interface CommitsListProps {
  commits: Commit[];
}

export const CommitsList: FC<CommitsListProps> = ({ commits }) => {
  return (
    <div className={styles.grid}>
      {commits.map((commit) => (
        <CommitCard {...commit} key={commit.url} />
      ))}
    </div>
  );
};
