import { InstagramGallery } from "instagram-gallery";

export default function InstaFeed() {
  return (
    <div className="mx-0 mt-20 mb-32 flex justify-center lg:mx-20 lg:mt-40 lg:mb-80">
      <div className="flex flex-col">
        <h1 className="font-poppins mb-10 flex justify-center text-xl md:text-2xl lg:mb-14">
          <a
            href="https://www.instagram.com/enga_beauty_ba10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex">
              <p className="font-poppins font-extralight italic">#</p>
              <p className="font-poppins font-normal italic">EngaBeauty</p>
            </div>
          </a>
        </h1>
        <div className="hidden md:flex">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJWQ1VJUUdGLWduVmlIUWY1ZAjJfbzZA4UUJwNzNESTFuTEgzb3M0Nl9Ga0xHcVZA5cVU0c2ViT2pIX0R4NTNUNmltNGg2QmRIV2FlVjhHYWNHZAzhscGJuTHNtbjJzXzZA4c29lekZACNGpmYTF5VXlIZAwZDZD"
            // accessToken="IGQVJVMllTblZAVVEpsMDZAhdmxlMzdMdXZAkY2xwR0JRMkdzSHJlMzliN09GOTdqVlRISzhDN1owYVphVmVBd3JDSVRzdlVsMXVsTGVOeHpQTHMwNkpNYklyUzJvcXEyTUtjY1JIektlTk1KTGx0TFIwQQZDZD"
            count={18}
          />
        </div>
        <div className="md:hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJWQ1VJUUdGLWduVmlIUWY1ZAjJfbzZA4UUJwNzNESTFuTEgzb3M0Nl9Ga0xHcVZA5cVU0c2ViT2pIX0R4NTNUNmltNGg2QmRIV2FlVjhHYWNHZAzhscGJuTHNtbjJzXzZA4c29lekZACNGpmYTF5VXlIZAwZDZD"
            count={16}
          />
        </div>
      </div>
    </div>
  );
}
