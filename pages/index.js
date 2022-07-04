import { gql } from "@apollo/client";
import Head from "next/head";
import client from "../appoloClient";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import Banner from "../components/Banner/Banner";
import InstagramPosts from "../components/InstagramFeed/InstagramPosts";
import TestimonialSwiper from "../components/Testimonials/TestimonialSwiper";

export default function IndexPage({ testimonials }) {
  return (
    <>
      <Head>
        <title>Enga Beauty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllTreatments />
      <TestimonialSwiper testimonials={testimonials} />
      <InstagramPosts />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        testimonials {
          id
          name
          text
          rating
        }
      }
    `,
  });

  const { testimonials } = data;
  return {
    props: {
      testimonials,
    },
  };
}
