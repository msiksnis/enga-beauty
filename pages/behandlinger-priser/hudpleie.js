import Head from "next/head";
import Microblading from "../../components/Priser/Microblading";
import { fetchMicroblading } from "../../utils/fetchMicroblading";

export default function MicrobladingPage({ microblading }) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Hudpleie</title>
      </Head>
      <Microblading microblading={microblading} />
    </>
  );
}

export async function getStaticProps() {
  const microblading = await fetchMicroblading();

  return {
    props: {
      microblading,
    },
    revalidate: 10,
  };
}
