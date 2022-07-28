import { CommitsList } from "components/CommitsList";
import { Header } from "components/Header";
import { useRef, useState } from "react";
import { useSessionStorage } from "react-use";
import { clientCommitsFetcher } from "services/clientCommitsFetcher";
import useSWR from "swr";
import { CommitsView } from "./CommitsView";
import { PersonalAccessKeyForm, KEY_INPUT_NAME } from "./PersonalAccessKeyForm";

export const CommitsFetcher = () => {
  const [authKey, setAuthKey] = useSessionStorage<string | null>(
    KEY_INPUT_NAME,
    null
  );
  const swrResponse = useSWR(authKey, clientCommitsFetcher);
  if (authKey === null) {
    return <PersonalAccessKeyForm setKey={setAuthKey} />;
  }
  return (
    <>
      <button onClick={() => setAuthKey(null)}>Clear the key</button>
      <CommitsView {...swrResponse} />
    </>
  );
};
