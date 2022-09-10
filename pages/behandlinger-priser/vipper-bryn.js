import Head from "next/head";
import VipperBryn from "../../components/Priser/VipperBryn";
import { fetchLashes } from "../../utils/fetchLashes";
import { fetchBrows } from "../../utils/fetchBrows";

export default function VipperBrynPage({ lashes, brows }) {
  return (
    <>
      <Head>
        <title>Enga Beauty | Vipper & Bryn</title>
      </Head>
      <VipperBryn lashes={lashes} brows={brows} />
    </>
  );
}

export async function getStaticProps(context) {
  const lashes = await fetchLashes();
  const brows = await fetchBrows();

  return {
    props: {
      lashes,
      brows,
    },
  };
}
