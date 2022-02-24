import GoogleMaps from "../components/GoogleMapsReact";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="mt-28 pt-14 poppins h-auto pb-10 bg-gray-100">
      <h1 className="flex flex-col items-center justify-center text-2xl lg:text-4xl font-thin tracking-[0.10em] lora opacity-90 mb-20">
        <SocialIcons />
      </h1>
      <div className="lg:grid lg:mx-20 grid-cols-2">
        <div className="flex flex-col lg:h-[450px] h-[500px]  ">
          <div className="lg:justify-start lg:ml-0 lg:space-x-20 flex justify-between mx-6 mb-4 space-x-10">
            <div className="">
              <p className="font-semibold">Du finner oss her:</p>
              <p className="">Bygdøy allé 10</p>
              <p className="mb-4">0262 Oslo</p>
            </div>
            <div className="">
              <div className="lg:flex-row flex flex-col">
                <p className="font-semibold">Telefon:</p>
                <p className="lg:ml-2 lg:pb-0 pb-3">+47 45 84 50 04</p>
              </div>
              <div className="lg:flex-row flex flex-col">
                <p className="font-semibold">Email:</p>
                <a
                  href="mailto:info@engabeauty.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:ml-2 lg:pb-1 pb-3"
                >
                  info@engabeauty.no
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <GoogleMaps />
          </div>
        </div>

        <div className="mb-14 flex flex-col items-center ml-6">
          <div>
            <p className="mb-3 text-lg font-semibold">Åpningstider</p>
            <p className="">Man - Fre: 09:00 - 21:00</p>
            <p className="">Lørdag: 09:00 - 19:00</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-6">
        <div className="opacity-70 flex flex-col items-center mt-20 text-xs">
          <p>© 2021 ENGA BEAUTY</p>
        </div>
      </div>
    </div>
  );
}

// <p>
//   Made by{" "}
//   <a
//     href="mailto:marty@devmarty.com"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:opacity-100"
//   >
//     devmarty
//   </a>
// </p>
