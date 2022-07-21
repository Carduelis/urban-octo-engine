import { FC } from 'react';
import { Commit } from 'services/types';
import styles from './styles.module.css';

export const CommitCard: FC<Commit> = ({ url, author, message }) => {
  const date = new Date(author.date);
  return (
    <a className={styles.card} href={url} target="_blank" rel="noreferrer">
      <p>{message}</p>
      <small>
        <time dateTime={author.date}>{timestampFormatter(date)}</time> by{' '}
        {author.name ?? 'Anonym'}
      </small>
    </a>
  );
};

const timestampFormatter = (date: Date) => {
  try {
    return new Intl.DateTimeFormat('en', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch {
    return date.toDateString();
  }
};
