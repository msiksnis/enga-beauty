import Image from "next/image";
import { workingHours } from "../../lib/workingHours";
import ContactForm from "./ContactForm";
import GoogleMaps from "./GoogleMaps";

export default function ContactUs() {
  const { week } = workingHours;

  return (
    <>
      <div className="mt-24 flex w-full flex-col items-center justify-center md:mt-44">
        <div className="md:hidden">
          <Image
            src="/images/Niels_Juls.jpg"
            width={770}
            height={500}
            className="object-cover object-bottom"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/Niels_Juls.jpg"
            width={1440}
            height={600}
            className="object-cover object-bottom"
          />
        </div>
        <div className="mb-4 mt-10 flex flex-col items-center justify-center text-gray-700 md:mb-10 md:mt-20">
          <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
            Niels Juels gate 43A, 0257 Oslo
          </h1>
        </div>
        <h3 className="font-poppins mt-0 flex px-4 text-center font-light tracking-wide text-gray-500 md:text-lg lg:px-20 xl:px-40">
          Beliggenhet i hjertet av Frogner omgitt av eksklusive butikker, kjent
          for sine førsteklasses restauranter og luksuriøse boliger. Salongen er
          lett tilgjengelig med beliggenhet koblet til sentrum med trikk og
          buss. Den er nabo med Solli plass så det passer perfekt for en
          hyggelig gå eller sykkeltur på solfylte dager.
        </h3>
      </div>
      <div className="px-4 lg:px-20 xl:px-40">
        <div className="mt-20 flex grid-cols-12 flex-col-reverse md:grid">
          <div className="col-span-7">
            <ContactForm />
          </div>
          <div className="col-span-5 md:pl-20">
            <div className="font-lustria flex flex-col justify-center md:text-lg">
              <div className="flex flex-col pb-6 lg:flex-row">
                <p className="font-semibold text-gray-800">Telefon:</p>
                <p className="font-light tracking-wide text-gray-500 md:ml-2">
                  +47 45 84 50 04
                </p>
              </div>
              <div className="flex flex-col pb-6 lg:flex-row">
                <p className="font-semibold text-gray-800">Email:</p>
                <p className="font-light tracking-wide text-gray-500 md:ml-2">
                  info@engabeauty.no
                </p>
              </div>
              <div className="pb-16">
                <p className="font-semibold text-gray-800">Vår åpningstider:</p>
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
        </div>
        <div className="font-lustria my-20 flex w-full flex-col">
          <div className="flex w-full justify-center text-lg font-semibold text-gray-800">
            Kommer du med bilen?
          </div>
          <div className="font-light tracking-wide text-gray-500">
            <p className="pt-6 text-center">
              Det er gateparkering i området etter gjeldende bestemmelser og det
              enkleste er å benytte seg av EasyPark appen når man skal betale
              for parkeringen. Ønsker du å parkere på parkeringsplasser? Solli
              parkeringsplass er en av de nærmeste, den ligger i Solligata 3.
              Bare 700 meter unna salongen.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <GoogleMaps />
      </div>
    </>
  );
}
