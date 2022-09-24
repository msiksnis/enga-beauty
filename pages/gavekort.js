import Head from "next/head";
import Gavekort from "../components/Gavekort";
import { fetchGiftcards } from "../utils/fetchGiftcards";

export default function GiftcardPage({ giftcards }) {
  return (
    <div>
      <Head>
        <title>Enga Beauty | Gavekort</title>
      </Head>

      <Gavekort giftcards={giftcards} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const giftcards = await fetchGiftcards();

  return {
    props: {
      giftcards,
    },
  };
}
