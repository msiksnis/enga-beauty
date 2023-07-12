import Head from "next/head";
import Giftcards from "../components/Giftcards/Giftcards";
// import { fetchGiftcards } from "../utils/fetchGiftcards";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

export default function GiftcardPage({ giftcards }) {
  return (
    <div>
      <Head>
        <title>Atelier Beauté | Gavekort</title>
      </Head>

      <Giftcards giftcards={giftcards} />
    </div>
  );
}

const giftcardsQuery = groq`
*[_type == "giftcard"] {
    _id,
    title,
    slug,
    price,
    directLink,
    _createdAt,
    "imageUrl": giftcardImage.asset->url
  } | order(_createdAt desc)
`;

export async function getStaticProps() {
  const giftcards = await sanityClient.fetch(giftcardsQuery);

  return {
    props: {
      giftcards,
    },
    revalidate: 10,
  };
}
