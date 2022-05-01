import Head from "next/head";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import BannerTwo from "../components/Banner/BannerTwo";
import InstaFeed from "../components/InstaFeed/InstaFeed";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerTwo />
      <AllTreatments />
      <InstaFeed />
    </>
  );
}
