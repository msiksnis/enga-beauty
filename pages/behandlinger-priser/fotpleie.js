import Head from "next/head";
import Fotpleie from "../../components/Priser/Fotpleie";
import {
  fetchPedicureFemale,
  fetchPedicureMale,
} from "../../utils/fetchPedicureTreatments";

export default function FotpleiePage({ pedicureFemale, pedicureMale }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Fotpleie</title>
      </Head>
      <Fotpleie pedicureFemale={pedicureFemale} pedicureMale={pedicureMale} />
    </>
  );
}

export async function getStaticProps() {
  const pedicureFemale = await fetchPedicureFemale();
  const pedicureMale = await fetchPedicureMale();

  return {
    props: {
      pedicureFemale,
      pedicureMale,
    },
    revalidate: 10,
  };
}
