import Head from "next/head";
import Klippekort from "../components/Klippekort";
import {
  fetchKlippekortPedicureFemale,
  fetchKlippekortPedicureMale,
  fetchKlippekortManicureFemale,
  fetchKlippekortManicureMale,
  fetchKlippekortVipperOgBryn,
} from "../utils/fetchKlippekort";

export default function KlippekortPage({
  klippekortPedicureFemale,
  klippekortPedicureMale,
  klippekortManicureFemale,
  klippekortManicureMale,
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
        klippekortManicureFemale={klippekortManicureFemale}
        klippekortManicureMale={klippekortManicureMale}
        klippekortVipperOgBryn={klippekortVipperOgBryn}
      />
    </>
  );
}

export async function getStaticProps() {
  const klippekortPedicureFemale = await fetchKlippekortPedicureFemale();
  const klippekortPedicureMale = await fetchKlippekortPedicureMale();
  const klippekortManicureFemale = await fetchKlippekortManicureFemale();
  const klippekortManicureMale = await fetchKlippekortManicureMale();
  const klippekortVipperOgBryn = await fetchKlippekortVipperOgBryn();

  return {
    props: {
      klippekortPedicureFemale,
      klippekortPedicureMale,
      klippekortManicureFemale,
      klippekortManicureMale,
      klippekortVipperOgBryn,
    },
    revalidate: 10,
  };
}
