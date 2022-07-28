import { CommitsFetcher } from "components/CommitsFetcher";
import { Layout } from "components/Layout";
import Head from "next/head";
import { FC } from "react";

const CSR: FC = () => {
  return (
    <Layout>
      <Head>
        <title>CSR example with Client-side loading</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommitsFetcher />
    </Layout>
  );
};

export default CSR;