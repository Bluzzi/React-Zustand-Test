import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";
import { Navbar } from "$libraries/components/navbar";
import "$libraries/styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>React Zustand Test</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black h-screen">
        <div className="fixed w-full my-5 grid place-content-center">
          <Navbar />
        </div>

        <div className="h-full grid place-content-center">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}