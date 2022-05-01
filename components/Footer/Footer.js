import { workingHours } from "../../lib/workingHours";
import SocialIcons from "../SocialIcons";
import GoogleMaps from "./GoogleMaps";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between bg-gray-100">
      <h1 className="mt-20 flex items-center justify-center">
        <SocialIcons />
      </h1>
      <div className="my-10 flex w-full flex-col space-y-6 px-4 md:flex-row md:justify-between md:space-y-0 lg:my-20 lg:px-20 xl:px-40">
        <div className="w-44">
          <p className="font-poppins text-lg font-semibold">
            Du finner oss her:
          </p>
          <p className="">Bygdøy allé 10</p>
          <p className="">0262 Oslo</p>
        </div>
        <div className="w-64">
          <div className="font-poppins flex flex-col lg:flex-row ">
            <p className="font-semibold lg:mr-2">Telefon:</p>
            <p className="">+47 45 84 50 04</p>
          </div>
          <div className="font-poppins flex flex-col lg:flex-row ">
            <p className="font-semibold lg:mr-2">Email:</p>
            <a
              href="mailto:info@engabeauty.no"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@engabeauty.no
            </a>
          </div>
        </div>
        <div>
          <div className="w-48">
            <p className="font-poppins text-lg font-semibold">Åpningstider</p>
            {workingHours.map((workingHours) => (
              <div key={workingHours.id} className="tracking-wide">
                <p>{workingHours.week}</p>
                <p>{workingHours.weekend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <GoogleMaps />
      </div>
    </div>
  );
}
