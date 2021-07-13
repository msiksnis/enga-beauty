import ImageSlider from "../components/slider/ImageSlider";
import { SliderData } from "../components/slider/SliderData";

export default function testSlider() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  );
}
