import Head from "next/head";
// import Microblading from "../../components/Priser/Microblading";
import { fetchMicroblading } from "../../utils/fetchMicroblading";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";

export default function MicrobladingPage({ microblading }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Microblading</title>
      </Head>
      <Microblading microblading={microblading} />
    </>
  );
}

const microbladingQuery = groq`
*[_type == "treatment" && category == "microblading"] {
    _id,
    ...
  } | order(_createdAt asc)
`;

export async function getStaticProps() {
  const microblading = await sanityClient.fetch(microbladingQuery);

  return {
    props: {
      microblading,
    },
    revalidate: 10,
  };
}
