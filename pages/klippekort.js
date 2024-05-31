import Head from "next/head";
import Klippekort from "../components/Klippekort";
// import {
//   fetchKlippekortPedicureFemale,
//   fetchKlippekortPedicureMale,
//   fetchKlippekortVipperOgBryn,
// } from "../utils/fetchKlippekort";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

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
      <div className="mx-auto max-w-[100rem]">
        <Klippekort
          klippekortPedicureFemale={klippekortPedicureFemale}
          klippekortPedicureMale={klippekortPedicureMale}
          klippekortVipperOgBryn={klippekortVipperOgBryn}
        />
      </div>
    </>
  );
}

const pedicureKlippekortFemaleQuery = groq`
*[_type == "klippekort" && category == "fotpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const pedicureKlippekortMaleQuery = groq`
*[_type == "klippekort" && category == "fotpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const manicureKlippekortFemaleQuery = groq`
*[_type == "klippekort" && category == "håndpleie" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const manicureKlippekortMaleQuery = groq`
*[_type == "klippekort" && category == "håndpleie" && gender == "herre"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const vipperOgBrynKlippekortQuery = groq`
*[_type == "klippekort" && category == "vipperOgBryn" && gender == "dame"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export async function getStaticProps() {
  const klippekortPedicureFemale = await sanityClient.fetch(
    pedicureKlippekortFemaleQuery
  );
  const klippekortPedicureMale = await sanityClient.fetch(
    pedicureKlippekortMaleQuery
  );
  const manicureKlippekortFemale = await sanityClient.fetch(
    manicureKlippekortFemaleQuery
  );
  const manicureKlippekortMale = await sanityClient.fetch(
    manicureKlippekortMaleQuery
  );
  const klippekortVipperOgBryn = await sanityClient.fetch(
    vipperOgBrynKlippekortQuery
  );

  return {
    props: {
      klippekortPedicureFemale,
      klippekortPedicureMale,
      klippekortVipperOgBryn,
      manicureKlippekortFemale,
      manicureKlippekortMale,
    },
    revalidate: 10,
  };
}
