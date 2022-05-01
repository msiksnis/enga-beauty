import { InstagramGallery } from "instagram-gallery";

export default function InstaFeed() {
  return (
    <div className="mt-20 mb-32 flex justify-center lg:mt-40 lg:mb-80">
      <div className="flex flex-col">
        <h1 className="font-poppins mb-10 flex justify-center text-xl md:text-2xl lg:mb-14">
          <a
            href="https://www.instagram.com/enga_beauty_ba10/"
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
            accessToken="IGQVJXNHJjZATItUUJDbHNDUlBRaFBkZAVd3UHJTWGdaUzc4cndIbElMWVZA4Um5ZAeVBqLWxLbTVSNDg2WjkybHVOYlVULVNXQ29DaW5aSnRJYWI2WnlaTHhoRXY2TWhwdERTMnVQSUtielZA6YkJRX0tBNwZDZD"
            count={18}
          />
        </div>
        <div className="md:hidden">
          <InstagramGallery
            className="instagram-gallery instagram-item instagram-image"
            accessToken="IGQVJXNHJjZATItUUJDbHNDUlBRaFBkZAVd3UHJTWGdaUzc4cndIbElMWVZA4Um5ZAeVBqLWxLbTVSNDg2WjkybHVOYlVULVNXQ29DaW5aSnRJYWI2WnlaTHhoRXY2TWhwdERTMnVQSUtielZA6YkJRX0tBNwZDZD"
            count={16}
          />
        </div>
      </div>
    </div>
  );
}
