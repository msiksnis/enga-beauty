import { InstagramGallery } from "instagram-gallery";

export default function InstaFeed() {
  return (
    <div className="flex justify-center mx-0 lg:mx-20 mt-20 lg:mt-40">
      <div className="flex flex-col">
        <h1 className="flex justify-center text-xl md:text-2xl poppins mb-10 lg:mb-14">
          <a
            href="https://www.instagram.com/enga_beauty_ba10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <p className="font-extralight italic poppins">#</p>
              <p className="font-normal italic poppins">EngaBeauty</p>
            </div>
          </a>
        </h1>
        <div className="hidden md:flex">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJYakFEZA29NQkJvazc5NVc1UmQyVWU1bkZA3MmE5MXdOQW83cVRGUzRZAVUx0RHVkU0tjdXZAhdjRDVzlhVXRQVEIweHN0UDZAHOW05VnpmbEllM05BU0VaeHZAkNkZArV0ZAWSkxPek9HVUtpc1pDMUNJawZDZD"
            count={20}
          />
        </div>
        <div className="md:hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJYakFEZA29NQkJvazc5NVc1UmQyVWU1bkZA3MmE5MXdOQW83cVRGUzRZAVUx0RHVkU0tjdXZAhdjRDVzlhVXRQVEIweHN0UDZAHOW05VnpmbEllM05BU0VaeHZAkNkZArV0ZAWSkxPek9HVUtpc1pDMUNJawZDZD"
            count={12}
          />
        </div>
      </div>
    </div>
  );
}
