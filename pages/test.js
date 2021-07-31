import HeaderTwo from "../components/header/HeaderTwo";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import Banner from "../components/banner/Banner";
import InstaFeed from "../components/InstaFeed";
import Footer from "../components/Footer";

export default function test() {
  return (
    <div className="selection:bg-[gold]">
      <div className="hidden lg:inline">
        <HeaderTwo />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <Banner />
      <InstaFeed />
      <Footer />
    </div>
  );
}
