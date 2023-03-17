import Head from "next/head";
import Banner from "../components/Banner/Banner";
import InstagramPosts from "../components/InstagramFeed/InstagramPosts";
import TestimonialSwiper from "../components/Testimonials/TestimonialSwiper";
import { fetchReviews } from "../utils/fetchReviews";

export default function IndexPage({ reviews }) {
  return (
    <div>
      <Head>
        <title>Atelier Beauté Oslo</title>
        <meta
          name="description"
          content="Den offisielle nettsiden til Atelier Beauté Oslo. Vi tilbyr behandlinger som hudpleie, manikyr, håndpleie, pedikyr, fotpleie, vippebøy, brynsløft, parafinbehandlinger"
        />
        <meta
          name="keywords"
          content="hudpleie, manikyr, håndpleie, pedikyr, fotpleie, vippebøy, brynsløft, parafinbehandlinger"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
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
