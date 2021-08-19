import Head from "next/head";
import Footer from "../components/Footer";
import HeaderFixed from "../components/header/HeaderFixed";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import PriceList from "../components/PriceList";
import NewHeader from "../components/test/NewHeader";

export default function pricelist() {
  return (
    <div className="selection:bg-[gold]">
      <Head>
        <title>Enga Beauty | Prisliste</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden lg:inline">
        <NewHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <PriceList />
      <Footer />
    </div>
  );
}
