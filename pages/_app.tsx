import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

//make sure to see loader at the top
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());

export default MyApp;
