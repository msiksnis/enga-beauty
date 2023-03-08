import Head from "next/head";
import { fetchHudpleie } from "../../utils/fetchHudpleie";
import Hudpleie from "../../components/Priser/Hudpleie";

export default function HudpleiePage({ hudpleie }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Hudpleie</title>
      </Head>
      <Hudpleie hudpleie={hudpleie} />
    </>
  );
}

export async function getStaticProps() {
  const hudpleie = await fetchHudpleie();

  return {
    props: {
      hudpleie,
    },
    revalidate: 10,
  };
}
