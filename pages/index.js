import Head from "next/head";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import BannerTwo from "../components/Banner/BannerTwo";
import InstagramFeed from "../components/widgets/InstagramFeed";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerTwo />
      <AllTreatments />
      <InstagramFeed />
    </>
  );
}
