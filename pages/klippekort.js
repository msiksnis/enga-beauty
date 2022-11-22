import Head from "next/head";
import Klippekort from "../components/Klippekort";
import {
  fetchKlippekortPedicureFemale,
  fetchKlippekortPedicureMale,
  fetchKlippekortVipperOgBryn,
} from "../utils/fetchKlippekort";

export default function KlippekortPage({
  klippekortPedicureFemale,
  klippekortPedicureMale,
  klippekortVipperOgBryn,
}) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Klippekort</title>
      </Head>
      <Klippekort
        klippekortPedicureFemale={klippekortPedicureFemale}
        klippekortPedicureMale={klippekortPedicureMale}
        klippekortVipperOgBryn={klippekortVipperOgBryn}
      />
    </>
  );
}

export async function getStaticProps() {
  const klippekortPedicureFemale = await fetchKlippekortPedicureFemale();
  const klippekortPedicureMale = await fetchKlippekortPedicureMale();
  const klippekortVipperOgBryn = await fetchKlippekortVipperOgBryn();

  return {
    props: {
      klippekortPedicureFemale,
      klippekortPedicureMale,
      klippekortVipperOgBryn,
    },
    revalidate: 10,
  };
}
