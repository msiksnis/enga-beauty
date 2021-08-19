import Head from "next/head";
import Footer from "../components/Footer";
import Gavekort from "../components/Gavekort";
import HeaderFixed from "../components/header/HeaderFixed";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import NewHeader from "../components/header/NewHeader";

export default function giftcard() {
  return (
    <div className="selection:bg-[gold]">
      <Head>
        <title>Enga Beauty | Gavekort</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden lg:inline">
        <NewHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <Gavekort />
      <Footer />
    </div>
  );
}
