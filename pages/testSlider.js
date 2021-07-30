import MobileHeader from "../components/mobileHeader/MobileHeader";
import TestHeader from "../components/test/TestHeader";
import Banner from "../components/banner/Banner";
import InfoCovid from "../components/InfoCovid";
import InstaFeed from "../components/InstaFeed";
import Footer from "../components/Footer";

export default function testSlider() {
  return (
    <div>
      <div className="hidden lg:inline">
        <TestHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <InfoCovid />
      <Banner />
      <InstaFeed />
      <Footer />
    </div>
  );
}
