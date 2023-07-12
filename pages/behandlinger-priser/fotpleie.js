import Head from "next/head";
import Fotpleie from "../../components/Priser/Fotpleie";
// import {
//   fetchPedicureFemale,
//   fetchPedicureMale,
// } from "../../utils/fetchPedicureTreatments";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

export default function FotpleiePage({ pedicureFemale, pedicureMale }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Fotpleie</title>
        <meta
          name="description"
          content="Atelier Beauté Oslo. Pedikyr, fotpleie"
        />
        <meta name="keywords" content="pedikyr, fotpleie" />
      </Head>
      <Fotpleie pedicureFemale={pedicureFemale} pedicureMale={pedicureMale} />
    </>
  );
}

const pedicureTreatmentsFemaleQuery = groq`
*[_type == "treatment" && category == "fotpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const pedicureTreatmentsMaleQuery = groq`
*[_type == "treatment" && category == "fotpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export async function getStaticProps() {
  const pedicureFemale = await sanityClient.fetch(
    pedicureTreatmentsFemaleQuery
  );
  const pedicureMale = await sanityClient.fetch(pedicureTreatmentsMaleQuery);

  return {
    props: {
      pedicureFemale,
      pedicureMale,
    },
    revalidate: 10,
  };
}
