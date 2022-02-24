import Head from "next/head";
import VareBehandlinger from "../../components/priser/VareBehandlinger";

export default function BehandlingerPage() {
  return (
    <>
      <Head>
        <title>Enga Beauty | Våre behandlinger</title>
      </Head>
      <VareBehandlinger />
    </>
  );
}
