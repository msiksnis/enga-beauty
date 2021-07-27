import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

export default function InstaFeed() {
  return (
    <div className="flex mx-0 lg:mx-20 mt-20 lg:mt-40">
      <InstagramFeed
        token="IGQVJYakFEZA29NQkJvazc5NVc1UmQyVWU1bkZA3MmE5MXdOQW83cVRGUzRZAVUx0RHVkU0tjdXZAhdjRDVzlhVXRQVEIweHN0UDZAHOW05VnpmbEllM05BU0VaeHZAkNkZArV0ZAWSkxPek9HVUtpc1pDMUNJawZDZD"
        counter="6"
      />
    </div>
  );
}
