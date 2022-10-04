import Head from "next/head";
import Klippekort from "../components/Klippekort";
import {
  fetchKlippekortPedicureFemale,
  fetchKlippekortPedicureMale,
  fetchKlippekortManicureFemale,
  fetchKlippekortManicureMale,
} from "../utils/fetchKlippekort";

export default function KlippekortPage({
  klippekortPedicureFemale,
  klippekortPedicureMale,
  klippekortManicureFemale,
  klippekortManicureMale,
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
      />
    </>
  );
}

export async function getStaticProps() {
  const klippekortPedicureFemale = await fetchKlippekortPedicureFemale();
  const klippekortPedicureMale = await fetchKlippekortPedicureMale();
  const klippekortManicureFemale = await fetchKlippekortManicureFemale();
  const klippekortManicureMale = await fetchKlippekortManicureMale();

  return {
    props: {
      klippekortPedicureFemale,
      klippekortPedicureMale,
      klippekortManicureFemale,
      klippekortManicureMale,
    },
    revalidate: 10,
  };
}
