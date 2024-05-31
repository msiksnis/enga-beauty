import Head from "next/head";
import VipperBryn from "../../components/Priser/VipperBryn";
// import { fetchLashes } from "../../utils/fetchLashes";
// import { fetchBrows } from "../../utils/fetchBrows";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

export default function VipperBrynPage({ lashes, brows }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Vipper & Bryn</title>
        <meta
          name="description"
          content="Atelier Beauté Oslo. Vippebøy, brynsløft"
        />
        <meta name="keywords" content="vippebøy, brynsløft" />
      </Head>
      <div className="mx-auto max-w-[100rem]">
        <VipperBryn lashes={lashes} brows={brows} />
      </div>
    </>
  );
}

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
  const brows = await sanityClient.fetch(browsQuery);
  const lashes = await sanityClient.fetch(lashesQuery);

  return {
    props: {
      brows,
      lashes,
    },
    revalidate: 10,
  };
}
