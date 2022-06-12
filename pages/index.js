import Head from "next/head";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Banner from "../components/Banner/Banner";
import InstaFeed from "../components/InstaFeed/InstaFeed";
import TestimonialSwiper from "../components/Testimonials/TestimonialSwiper";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllTreatments />
      <InstaFeed />
      <TestimonialSwiper />
    </>
  );
}
