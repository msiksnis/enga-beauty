import Head from "next/head";
import VareBehandlinger from "../../components/Priser/VareBehandlinger";
import {
  fetchPedicureFemale,
  fetchPedicureMale,
} from "../../utils/fetchPedicureTreatments";
import {
  fetchManicureFemale,
  fetchManicureMale,
} from "../../utils/fetchManicureTreatments";
import { fetchMicroblading } from "../../utils/fetchMicroblading";
import { fetchLashes } from "../../utils/fetchLashes";
import { fetchBrows } from "../../utils/fetchBrows";

export default function BehandlingerPage({
  pedicureFemale,
  pedicureMale,
  manicureFemale,
  manicureMale,
  microblading,
  lashes,
  brows,
}) {
  return (
    <>
      <Head>
        <title>Atelier Beauté | Våre Behandlinger</title>
      </Head>
      <VareBehandlinger
        pedicureFemale={pedicureFemale}
        pedicureMale={pedicureMale}
        manicureFemale={manicureFemale}
        manicureMale={manicureMale}
        microblading={microblading}
        lashes={lashes}
        brows={brows}
      />
    </>
  );
}

export async function getStaticProps() {
  const pedicureFemale = await fetchPedicureFemale();
  const pedicureMale = await fetchPedicureMale();
  const manicureFemale = await fetchManicureFemale();
  const manicureMale = await fetchManicureMale();
  const microblading = await fetchMicroblading();
  const lashes = await fetchLashes();
  const brows = await fetchBrows();

  return {
    props: {
      pedicureFemale,
      pedicureMale,
      manicureFemale,
      manicureMale,
      microblading,
      lashes,
      brows,
    },
    revalidate: 10,
  };
}
