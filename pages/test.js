import Giftcards from "../components/Giftcards/Giftcards";
import { fetchGiftcards } from "../utils/fetchGiftcards";

export default function TestPage({ giftcards }) {
  return (
    <div className="font-rubik mt-44 flex w-full justify-center px-4 lg:px-40">
      <div className="grid grid-cols-3 gap-5">
        <Giftcards giftcards={giftcards} />
      </div>
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
