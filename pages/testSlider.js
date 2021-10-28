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
import FramerComponents from "../components/test/FramerComponents";
import XLParaffin from "../components/treatments/XLParaffin";

export default function testSlider() {
  return (
    <div>
      <div className="hidden lg:inline">
        <NewHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
      <XLParaffin />
      <Carousel />
      <FramerComponents />
      <TestimonialsTwo slides={Data} />
      <Footer />
    </div>
  );
}
// <ImageSlider slides={SliderData} />
