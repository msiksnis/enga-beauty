import Head from "next/head";
import Microblading from "../../components/Priser/Microblading";
import { fetchMicroblading } from "../../utils/fetchMicroblading";

export default function MicrobladingPage({ microblading }) {
  return (
    <>
      <Head>
        <title>Enga Beauty | Microblading</title>
      </Head>
      <Microblading microblading={microblading} />
    </>
  );
}

export async function getStaticProps(context) {
  const microblading = await fetchMicroblading();

  return {
    props: {
      microblading,
    },
  };
}
