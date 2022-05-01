import AllTreatments from "../components/AllTreatments/AllTreatments";
import Footer from "../components/Footer/Footer";
import InstaFeed from "../components/InstaFeed/InstaFeed";
import Testimonials from "../components/Testimonials/Testimonials";

export default function TestPage() {
  return (
    <div className="mt-28 md:mt-44">
      <AllTreatments />
      <Testimonials />
      <InstaFeed />
      <Footer />
    </div>
  );
}
