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
        <title>Enga Beauty | Fotpleie</title>
      </Head>
      <Fotpleie pedicureFemale={pedicureFemale} pedicureMale={pedicureMale} />
    </>
  );
}

export async function getServerSideProps(context) {
  const pedicureFemale = await fetchPedicureFemale();
  const pedicureMale = await fetchPedicureMale();

  return {
    props: {
      pedicureFemale,
      pedicureMale,
    },
  };
}
