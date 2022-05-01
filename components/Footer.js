import GoogleMaps from "../components/GoogleMapsReact";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { workingHours } from "../lib/workingHours";

export default function Footer() {
  return (
    <div className="poppins mt-28 h-auto bg-gray-100 pt-14 pb-10">
      <h1 className="lora mb-20 flex flex-col items-center justify-center text-2xl font-thin tracking-[0.10em] opacity-90 lg:text-4xl">
        <SocialIcons />
      </h1>
      <div className="grid-cols-2 lg:mx-20 lg:grid">
        <div className="flex h-[500px] flex-col lg:h-[450px]  ">
          <div className="mx-6 mb-4 flex justify-between space-x-10 lg:ml-0 lg:justify-start lg:space-x-20">
            <div className="">
              <p className="font-semibold">Du finner oss her:</p>
              <p className="">Bygdøy allé 10</p>
              <p className="mb-4">0262 Oslo</p>
            </div>
            <div className="">
              <div className="flex flex-col lg:flex-row">
                <p className="font-semibold">Telefon:</p>
                <p className="pb-3 lg:ml-2 lg:pb-0">+47 45 84 50 04</p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="font-semibold">Email:</p>
                <a
                  href="mailto:info@engabeauty.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pb-3 lg:ml-2 lg:pb-1"
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

        <div className="mb-14 ml-6 flex flex-col items-center">
          <div>
            <p className="mb-3 text-lg font-semibold">Åpningstider</p>
            {workingHours.map((workingHours) => (
              <div
                key={workingHours.id}
                className="font-light tracking-wide text-gray-500"
              >
                <p>{workingHours.week}</p>
                <p>{workingHours.weekend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex w-full flex-col items-center">
        <div className="mt-20 flex flex-col items-center text-xs opacity-70">
          <p>© 2022 ENGA BEAUTY</p>
        </div>
      </div>
    </div>
  );
}
