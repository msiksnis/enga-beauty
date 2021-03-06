import { InstagramGallery } from "instagram-gallery";

export default function InstaFeed() {
  return (
    <div className="mt-20 mb-40 flex justify-center lg:mt-40">
      <div className="flex flex-col">
        <h1 className="font-poppins mb-10 flex justify-center text-xl md:text-2xl lg:mb-14">
          <a
            href="https://www.instagram.com/enga_health_beauty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center text-gray-700">
              <h1 className="font-lustria relative z-10 flex text-2xl capitalize md:text-4xl">
                <p className="font-poppins font-light">#</p>
                <p className="font-poppins font-normal italic">EngaBeauty</p>
              </h1>
            </div>
          </a>
        </h1>
        <div className="hidden md:flex">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            // accessToken="IGQVJVR1FvNXkyVUFPdUw2ZAlZARVE9fc0tNNTROb2Y1OFBXc2JJWUNNOFFUOFlTVk9LSVNoTjl2MkFOclE4OWlsZATI5WUgyRW1ZAdnZAkMDRjR255MktTSmNfUWdJYjBkZAHZAuRFJSU0lMck93S1RONU1wRgZDZD"
            accessToken="IGQVJWcGRDYlZAOOEN5dHdmSU9iVUVrUHBTZAjg1NDVGb01XMDJxNlBUQWtqNDR5T1B5UTdsanZAlbmRFTnJHZAnRObC02bjVrR0p2WWNpeUdNcEtCUWk2UHF6dExycUFmVWpYTEk0di1JdDdnSjZACMjdjcwZDZD"
            count={18}
            pagination={true}
          />
        </div>
        <div className="md:hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJWcGRDYlZAOOEN5dHdmSU9iVUVrUHBTZAjg1NDVGb01XMDJxNlBUQWtqNDR5T1B5UTdsanZAlbmRFTnJHZAnRObC02bjVrR0p2WWNpeUdNcEtCUWk2UHF6dExycUFmVWpYTEk0di1JdDdnSjZACMjdjcwZDZD"
            count={16}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
}
