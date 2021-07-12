import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpaManicurePedicure from "../components/treatments/SpaManicurePedicure";

export default function spaManicurePedicure() {
  return (
    <div>
      <Head>
        <title>Enga Beauty | SPA Manicure Pedicure</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SpaManicurePedicure />
      <Footer />
    </div>
  );
}
