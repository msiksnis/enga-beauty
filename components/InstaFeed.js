import { InstagramGallery } from "instagram-gallery";

export default function InstaFeed() {
  return (
    <div className="flex justify-center mx-0 lg:mx-20 mt-20 lg:mt-40">
      <div className="flex flex-col">
        <h1 className="flex justify-center text-xl md:text-2xl poppins mb-10 lg:mb-14">
          Follow us on&nbsp;
          <a
            href="https://www.instagram.com/enga_beauty_ba10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </h1>
        <div className="hidden md:flex">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJYakFEZA29NQkJvazc5NVc1UmQyVWU1bkZA3MmE5MXdOQW83cVRGUzRZAVUx0RHVkU0tjdXZAhdjRDVzlhVXRQVEIweHN0UDZAHOW05VnpmbEllM05BU0VaeHZAkNkZArV0ZAWSkxPek9HVUtpc1pDMUNJawZDZD"
            count={9}
          />
        </div>
        <div className="md:hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJYakFEZA29NQkJvazc5NVc1UmQyVWU1bkZA3MmE5MXdOQW83cVRGUzRZAVUx0RHVkU0tjdXZAhdjRDVzlhVXRQVEIweHN0UDZAHOW05VnpmbEllM05BU0VaeHZAkNkZArV0ZAWSkxPek9HVUtpc1pDMUNJawZDZD"
            count={8}
          />
        </div>
      </div>
    </div>
  );
}
