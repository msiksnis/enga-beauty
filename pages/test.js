import TestHandpleie from "../components/Priser/TestHanpleie";
import {
  fetchManicureFemale,
  fetchManicureMale,
} from "../utils/fetchManicureTreatments";

export default function TestPage({ manicureFemale, manicureMale }) {
  return (
    <div className="">
      <TestHandpleie
        manicureFemale={manicureFemale}
        manicureMale={manicureMale}
      />
    </div>
  );
}

export async function getStaticProps() {
  const manicureFemale = await fetchManicureFemale();
  const manicureMale = await fetchManicureMale();

  return {
    props: {
      manicureFemale,
      manicureMale,
    },
    revalidate: 10,
  };
}
