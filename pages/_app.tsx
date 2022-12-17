import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "$libraries/styles/tailwind.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>React Zustand Test</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}