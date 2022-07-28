import { Timestamp } from "components/Timestamp";
import { FC } from "react";
import { Commit } from "services/types";
import styles from "./styles.module.css";

export const CommitCard: FC<Commit> = ({ url, author, message }) => {
  const date = new Date(author.date);
  return (
    <a className={styles.card} href={url} target="_blank" rel="noreferrer">
      <div className={styles.cardContent}>
        <p>{message}</p>
        <small>by {author.name ?? "Anonym"}</small>
        <span className={styles.timestamp}>
          <Timestamp date={author.date} />
        </span>
      </div>
    </a>
  );
};
