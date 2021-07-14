import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/banner/Banner";
import InfoCovid from "../components/InfoCovid";
import ImageSlider from "../components/slider/ImageSlider";
import { SliderData } from "../components/slider/SliderData";

export default function Home() {
  return (
    <div className="selection:bg-[gold]">
      <Head>
        <title>Enga Beauty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <InfoCovid />
      <ImageSlider slides={SliderData} />
      <Banner />
      <Footer />
    </div>
  );
}
