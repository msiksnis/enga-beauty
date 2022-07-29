import { useQuery } from "@apollo/client";
import Head from "next/head";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Banner from "../components/Banner/Banner";
import InstagramPosts from "../components/InstagramFeed/InstagramPosts";
import TestimonialSwiper from "../components/Testimonials/TestimonialSwiper";
import { Testimonials } from "../graphql/queries";

export default function IndexPage() {
  const { data, loading, error } = useQuery(Testimonials);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }

  const { testimonials } = data;

  return (
    <div>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllTreatments />
      <TestimonialSwiper testimonials={testimonials} />
      <InstagramPosts />
    </div>
  );
}
