import TestHeader from "../components/test/TestHeader";
import { InstagramGallery } from "instagram-gallery";

export default function testSlider() {
  return (
    <div>
      <TestHeader />
      <InstagramGallery
        className="instagram-gallery instagram-item instagram-image"
        accessToken="IGQVJYakFEZA29NQkJvazc5NVc1UmQyVWU1bkZA3MmE5MXdOQW83cVRGUzRZAVUx0RHVkU0tjdXZAhdjRDVzlhVXRQVEIweHN0UDZAHOW05VnpmbEllM05BU0VaeHZAkNkZArV0ZAWSkxPek9HVUtpc1pDMUNJawZDZD"
        count={12}
      />
    </div>
  );
}
