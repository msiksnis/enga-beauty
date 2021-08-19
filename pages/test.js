import HeaderFixed from "../components/header/HeaderFixed";
import NewHeader from "../components/test/NewHeader";
import MobileHeader from "../components/mobileHeader/MobileHeader";
import BannerWithText from "../components/banner/BannerWithText";
import InstaFeed from "../components/InstaFeed";
import Footer from "../components/Footer";
import BannerTwo from "../components/banner/BannerTwo";

export default function test() {
  return (
    <div className="selection:bg-[gold]">
      <div className="hidden lg:inline">
        <NewHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <BannerTwo />
      <InstaFeed />
      <Footer />
    </div>
  );
}
