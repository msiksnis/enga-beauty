import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Paraffin from "../components/treatments/Paraffin";

export default function paraffin() {
  return (
    <div>
      <Head>
        <title>Enga Beauty | Paraffin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Paraffin />
      <Footer />
    </div>
  );
}
