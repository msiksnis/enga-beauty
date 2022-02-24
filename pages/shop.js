import Head from "next/head";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import HeaderFixed from "../components/header/HeaderFixed";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import NewHeader from "../components/header/NewHeader";

export default function shop() {
  return (
    <div className="selection:bg-[gold]">
      <Head>
        <title>Enga Beauty | Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:inline hidden">
        <NewHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <Shop />
      <Footer />
    </div>
  );
}
