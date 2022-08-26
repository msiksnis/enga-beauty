import "../styles/globals.css";
import NProgress from "nprogress";
import "../components/styles/nprogress.css";
import Router from "next/router";
import Page from "../components/Page";
import { AppStateProvider } from "../contexts/LocalState";
import { ApolloProvider } from "@apollo/client";
import withData from "../lib/withData";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps }, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <SessionProvider session={session}>
        <AppStateProvider>
          <Page>
            <Component {...pageProps} />
            <Toaster position="top-center" reverseOrder={true} />
          </Page>
        </AppStateProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
