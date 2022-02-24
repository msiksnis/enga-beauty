import MobileHeader from "../components/mobileHeader/MobileHeader";
import ImageSlider from "../components/slider/ImageSlider";
import SliderData from "../components/slider/SliderData";
import InfoCovid from "../components/InfoCovid";
import InstaFeed from "../components/InstaFeed";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import NewHeader from "../components/header/NewHeader";
import TestimonialsTwo from "../components/testimonial/TestimonialsTwo";
import { Data } from "../components/testimonial/TestimonialData";

export default function testSlider() {
  return (
    <div>
      <div className="lg:inline hidden">
        <NewHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <div className="">
        <TestimonialsTwo slides={Data} />
      </div>
      <Footer />
    </div>
  );
}
