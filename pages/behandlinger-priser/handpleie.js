import Head from "next/head";
import Handpleie from "../../components/Priser/Handpleie";
// import {
//   fetchManicureFemale,
//   fetchManicureMale,
// } from "../../utils/fetchManicureTreatments";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

export default function HandpleiePage({ manicureFemale, manicureMale }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Håndpleie</title>
        <meta
          name="description"
          content="Atelier Beauté Oslo. Håndpleie, manikyr"
        />
        <meta name="keywords" content="håndpleie, manikyr" />
      </Head>
      <div className="mx-auto max-w-[100rem]">
        <Handpleie
          manicureFemale={manicureFemale}
          manicureMale={manicureMale}
        />
      </div>
    </>
  );
}

const manicureTreatmentsFemaleQuery = groq`
*[_type == "treatment" && category == "handpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const manicureTreatmentsMaleQuery = groq`
*[_type == "treatment" && category == "handpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export async function getStaticProps() {
  const manicureFemale = await sanityClient.fetch(
    manicureTreatmentsFemaleQuery
  );
  const manicureMale = await sanityClient.fetch(manicureTreatmentsMaleQuery);

  return {
    props: {
      manicureFemale,
      manicureMale,
    },
    revalidate: 10,
  };
}
