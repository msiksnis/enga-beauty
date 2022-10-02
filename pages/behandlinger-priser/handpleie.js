import Head from "next/head";
import Handpleie from "../../components/Priser/Handpleie";
import {
  fetchManicureFemale,
  fetchManicureMale,
} from "../../utils/fetchManicureTreatments";

export default function HandpleiePage({ manicureFemale, manicureMale }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Håndpleie</title>
      </Head>
      <Handpleie manicureFemale={manicureFemale} manicureMale={manicureMale} />
    </>
  );
}

export async function getServerSideProps(context) {
  const manicureFemale = await fetchManicureFemale();
  const manicureMale = await fetchManicureMale();

  return {
    props: {
      manicureFemale,
      manicureMale,
    },
  };
}
