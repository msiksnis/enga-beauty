import Head from "next/head";
import Banner from "../components/Banner/Banner";
import InstagramFeed from "../components/widgets/InstagramFeed";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <InstagramFeed />
      </main>
    </>
  );
}
