import { FC } from "react";
import styles from "./Header.module.css";

export interface HeaderProps {
  totalCommits: number;
  repositoryLink: string;
}

export const Header: FC<HeaderProps> = ({ totalCommits, repositoryLink }) => {
  return (
    <h1 className={styles.title}>
      <a href={repositoryLink} target="_blank" rel="nofollow noreferrer">
        There are
      </a>{" "}
      {totalCommits} commits
    </h1>
  );
};
