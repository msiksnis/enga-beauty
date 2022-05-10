import Head from "next/head";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import BannerBlossoms from "../components/Banner/BannerBlossoms";
import InstaFeed from "../components/InstaFeed/InstaFeed";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerBlossoms />
      <AllTreatments />
      <InstaFeed />
    </>
  );
}
