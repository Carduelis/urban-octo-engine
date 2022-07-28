import { CommitsList } from "components/CommitsList";
import { Header } from "components/Header";
import { useRef, useState } from "react";
import { clientCommitsFetcher } from "services/clientCommitsFetcher";
import useSWR from "swr";
import { CommitsView } from "./CommitsView";

export const CommitsFetcher = () => {
  const [authKey, setAuthKey] = useState<string>(null);
  const swrResponse = useSWR(authKey, clientCommitsFetcher);
  const ref = useRef<HTMLFormElement>(null);
  if (authKey === null) {
    return (
      <form
        ref={ref}
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(ref.current);
          setAuthKey(String(formData.get("key")) ?? null);
        }}
      >
        <input
          type="text"
          name="key"
          placeholder="Enter key"
          defaultValue={process.env.NEXT_PUBLIC_PERSONAL_ACCESS_KEY}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
  return <CommitsView {...swrResponse} />;
};
