import { InstagramGallery } from "instagram-gallery";

export default function InstaFeed() {
  return (
    <div className="lg:mx-20 lg:mt-40 flex justify-center mx-0 mt-20">
      <div className="flex flex-col">
        <h1 className="md:text-2xl poppins lg:mb-14 flex justify-center mb-10 text-xl">
          <a
            href="https://www.instagram.com/enga_beauty_ba10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <p className="font-extralight poppins italic">#</p>
              <p className="poppins italic font-normal">EngaBeauty</p>
            </div>
          </a>
        </h1>
        <div className="md:flex hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJVMllTblZAVVEpsMDZAhdmxlMzdMdXZAkY2xwR0JRMkdzSHJlMzliN09GOTdqVlRISzhDN1owYVphVmVBd3JDSVRzdlVsMXVsTGVOeHpQTHMwNkpNYklyUzJvcXEyTUtjY1JIektlTk1KTGx0TFIwQQZDZD"
            count={20}
          />
        </div>
        <div className="md:hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJVMllTblZAVVEpsMDZAhdmxlMzdMdXZAkY2xwR0JRMkdzSHJlMzliN09GOTdqVlRISzhDN1owYVphVmVBd3JDSVRzdlVsMXVsTGVOeHpQTHMwNkpNYklyUzJvcXEyTUtjY1JIektlTk1KTGx0TFIwQQZDZD"
            count={12}
          />
        </div>
      </div>
    </div>
  );
}
