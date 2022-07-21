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
