import Head from "next/head";
import Giftcards from "../components/Giftcards/Giftcards";
import { fetchGiftcards } from "../utils/fetchGiftcards";

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

export async function getStaticProps() {
  const giftcards = await fetchGiftcards();

  return {
    props: {
      giftcards,
    },
    revalidate: 10,
  };
}
