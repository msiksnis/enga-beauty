import HeaderFixed from "../components/header/HeaderFixed";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import BannerWithText from "../components/banner/BannerWithText";
import InstaFeed from "../components/InstaFeed";
import Footer from "../components/Footer";

export default function test() {
  return (
    <div className="selection:bg-[gold]">
      <div className="hidden lg:inline">
        <HeaderFixed />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <BannerWithText />
      <InstaFeed />
      <Footer />
    </div>
  );
}
