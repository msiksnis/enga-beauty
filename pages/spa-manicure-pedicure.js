import Head from "next/head";
import Footer from "../components/Footer";
import SpaManicurePedicure from "../components/treatments/SpaManicurePedicure";
import HeaderFixed from "../components/header/HeaderFixed";
import MobileHeader from "../components/mobileHeader/MobileHeader";

export default function spaManicurePedicure() {
  return (
    <div>
      <Head>
        <title>Enga Beauty | SPA Manicure Pedicure</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden lg:inline">
        <HeaderFixed />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <SpaManicurePedicure />
      <Footer />
    </div>
  );
}
