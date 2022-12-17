import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "$libraries/styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}