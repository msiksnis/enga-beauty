import GoogleMaps from "../components/GoogleMapsReact";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <div className="mt-28 pb-10 pt-14 bg-gray-100 h-auto">
      <h1 className="flex flex-col items-center justify-center text-2xl lg:text-4xl font-bold tracking-widest lora opacity-90 mb-20">
        <Link href="/">ENGA BEAUTY</Link>
        <SocialIcons />
      </h1>
      <div className="lg:grid grid-cols-2 lg:mx-20">
        <div className="flex flex-col lg:h-[450px] h-[500px]  ">
          <div className="flex justify-center lg:justify-start mx-6 lg:ml-0 mb-4 space-x-10 lg:space-x-20">
            <div className="">
              <p className="font-semibold">Du finner oss her:</p>
              <p className="">Bygdøy allé 10</p>
              <p className="mb-4">0262 Oslo</p>
            </div>
            <div className="">
              <div className="flex flex-col lg:flex-row">
                <p className="font-semibold">Telefon:</p>
                <p className="lg:ml-2 pb-3 lg:pb-1">+47 45 84 50 04</p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="font-semibold">Email:</p>
                <a
                  href="mailto:info@engabeauty.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:ml-2 pb-3 lg:pb-1"
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

        <div className="ml-6 mb-14 flex flex-col items-center">
          <div>
            <p className="font-semibold text-lg mb-3">Åpningstider</p>
            <p className="">Man - Fre: 09:00 - 21:00</p>
            <p className="">Lørdag: 09:00 - 19:00</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-6">
        <div className="mt-20 text-xs opacity-70 flex flex-col items-center">
          <p>© 2021 All Rights Reserved</p>
          <p>
            Made by{" "}
            <a
              href="mailto:marty@devmarty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100"
            >
              devmarty
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// <h1 className="text-lg montserrat">Sign up for newsletter.</h1>
//         <div className="flex mt-4">
//           <input
//             className="shadow-md appearance-none border border-black w-36 lg:w-64 pl-3 mr-6 lg:mr-10 rounded leading-tight focus:outline-none focus:shadow-outline h-10"
//             id="username"
//             type="text"
//             placeholder="Email Address"
//           />
//           <button className="border border-black w-36 lg:w-64 bg-black/90 text-white text-sm lg:text-lg hover:bg-white hover:text-black/90 rounded shadow-md h-10">
//             Subscribe
//           </button>
//         </div>
