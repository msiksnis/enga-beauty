import "../styles/globals.css";
import NProgress from "nprogress";
import "../components/styles/nprogress.css";
import Router from "next/router";
import { AppStateProvider } from "../contexts/LocalState";
import Page from "../components/Page";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppStateProvider>
  );
}

export default MyApp;
