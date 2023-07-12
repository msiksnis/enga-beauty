import Head from "next/head";
// import { fetchHudpleie } from "../../utils/fetchHudpleie";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";
import Hudpleie from "../../components/Priser/Hudpleie";

export default function HudpleiePage({ hudpleie }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Hudpleie</title>
        <meta name="description" content="Atelier Beauté Oslo. Hudpleie" />
        <meta name="keywords" content="hudpleie" />
      </Head>
      <Hudpleie hudpleie={hudpleie} />
    </>
  );
}

const hudpleieQuery = groq`
*[_type == "treatment" && category == "hudpleie"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export async function getStaticProps() {
  const hudpleie = await sanityClient.fetch(hudpleieQuery);

  return {
    props: {
      hudpleie,
    },
    revalidate: 10,
  };
}
