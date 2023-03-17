import Head from "next/head";
import VipperBryn from "../../components/Priser/VipperBryn";
import { fetchLashes } from "../../utils/fetchLashes";
import { fetchBrows } from "../../utils/fetchBrows";

export default function VipperBrynPage({ lashes, brows }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Vipper & Bryn</title>
        <meta
          name="description"
          content="Atelier Beauté Oslo. Vippebøy, brynsløft"
        />
        <meta name="keywords" content="vippebøy, brynsløft" />
      </Head>
      <VipperBryn lashes={lashes} brows={brows} />
    </>
  );
}

export async function getStaticProps() {
  const lashes = await fetchLashes();
  const brows = await fetchBrows();

  return {
    props: {
      lashes,
      brows,
    },
    revalidate: 10,
  };
}
