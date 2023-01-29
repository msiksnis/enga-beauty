import "../styles/globals.css";
import NProgress from "nprogress";
import "../components/styles/nprogress.css";
import Router from "next/router";
import Page from "../components/Page";
import { AppStateProvider } from "../contexts/LocalState";
import { Analytics } from "@vercel/analytics/react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  console.log(
    "%cAtelier Beaute website is made by Developer Marty. Contact him for any questions or just say Hi 👋 at developermarty@gmail.com",
    "background: #ee11cc; color: #fff; font-size: 1.5rem; padding: 1rem;"
  );
  return (
    <AppStateProvider>
      <Page>
        <Component {...pageProps} />
        <Analytics />
      </Page>
    </AppStateProvider>
  );
}
