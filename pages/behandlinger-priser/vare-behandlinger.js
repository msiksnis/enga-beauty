import Head from "next/head";
import VareBehandlinger from "../../components/Priser/VareBehandlinger";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

export default function BehandlingerPage({
  pedicureFemale,
  pedicureMale,
  manicureFemale,
  manicureMale,
  microblading,
  hudpleie,
  lashes,
  brows,
}) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Våre Behandlinger</title>
        <meta
          name="description"
          content="Den offisielle nettsiden til Atelier Beauté Oslo. Vi tilbyr behandlinger som hudpleie, manikyr, håndpleie, pedikyr, fotpleie, vippebøy, brynsløft, parafinbehandlinger"
        />
        <meta
          name="keywords"
          content="hudpleie, manikyr, håndpleie, pedikyr, fotpleie, vippebøy, brynsløft, parafinbehandlinger"
        />
      </Head>
      <div className="mx-auto max-w-[150rem]">
        <VareBehandlinger
          pedicureFemale={pedicureFemale}
          pedicureMale={pedicureMale}
          manicureFemale={manicureFemale}
          manicureMale={manicureMale}
          microblading={microblading}
          hudpleie={hudpleie}
          lashes={lashes}
          brows={brows}
        />
      </div>
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

const microbladingQuery = groq`
*[_type == "treatment" && category == "microblading"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const hudpleieQuery = groq`
*[_type == "treatment" && category == "hudpleie"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const browsQuery = groq`
*[_type == "treatment" && category == "bryn"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

const lashesQuery = groq`
*[_type == "treatment" && category == "vippe"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export async function getStaticProps() {
  const pedicureFemale = await sanityClient.fetch(
    pedicureTreatmentsFemaleQuery
  );
  const pedicureMale = await sanityClient.fetch(pedicureTreatmentsMaleQuery);
  const manicureFemale = await sanityClient.fetch(
    manicureTreatmentsFemaleQuery
  );
  const manicureMale = await sanityClient.fetch(manicureTreatmentsMaleQuery);
  const microblading = await sanityClient.fetch(microbladingQuery);
  const hudpleie = await sanityClient.fetch(hudpleieQuery);
  const brows = await sanityClient.fetch(browsQuery);
  const lashes = await sanityClient.fetch(lashesQuery);

  return {
    props: {
      pedicureFemale,
      pedicureMale,
      manicureFemale,
      manicureMale,
      microblading,
      hudpleie,
      brows,
      lashes,
    },
    revalidate: 10,
  };
}
