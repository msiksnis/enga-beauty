import Head from "next/head";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Banner from "../components/Banner/Banner";
import InstagramPosts from "../components/InstagramFeed/InstagramPosts";
import TestimonialSwiper from "../components/Testimonials/TestimonialSwiper";
import { fetchReviews } from "../utils/fetchReviews";

export default function IndexPage({ reviews }) {
  return (
    <div>
      <Head>
        <title>Atelier Beauté | Oslo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllTreatments />
      <TestimonialSwiper reviews={reviews} />
      <InstagramPosts />
    </div>
  );
}

export async function getStaticProps() {
  const reviews = await fetchReviews();

  return {
    props: {
      reviews,
    },
    revalidate: 20,
  };
}
