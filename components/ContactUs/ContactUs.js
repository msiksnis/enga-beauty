import Image from "next/image";
import { workingHours } from "../../lib/workingHours";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <>
      <div className="mx-auto max-w-[100rem]">
        <div className="mt-24 flex w-full flex-col items-center justify-center md:mt-44">
          <div className="md:hidden">
            <Image
              src="/images/contacts/contacts-photo.jpg"
              width={770}
              height={500}
              className="object-cover object-bottom"
            />
          </div>
          <div className="hidden md:block lg:mx-20 xl:mx-40">
            <Image
              src="/images/contacts/contacts-photo.jpg"
              width={1440}
              height={850}
              className="object-cover"
            />
          </div>
          <div className="mb-4 mt-10 flex flex-col items-center justify-center text-gray-700 md:mb-10 md:mt-20">
            <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
              Schønings gate 2B, 0356 Oslo
            </h1>
          </div>
          <h3 className="font-poppins mt-0 flex px-4 text-center font-light tracking-wide text-gray-500 md:text-lg lg:px-20 xl:px-40">
            Salongen er nabo med Frogner parken og her starter Bogstadveien som
            er kjent for mange eksklusive butikker, kaffebutikker og
            restauranter. Salongen er bare 5 min gange fra Majorstuen t-bane og
            lett tilgjengelig med kun 1 min gange til buss og trikk. Parkering
            er lett tilgjengelig med kommunal parkering.
          </h3>
        </div>
        <div className="px-4 lg:px-20 xl:px-40">
          <div className="my-20 flex grid-cols-12 flex-col-reverse md:grid">
            <div className="col-span-7">
              <ContactForm />
            </div>
            <div className="col-span-5 md:pl-20">
              <div className="font-lustria flex flex-col justify-center md:text-lg">
                {/* <div className="flex flex-col lg:flex-row">
                <p className="text-gray-80 font-semibold">Telefon:</p>
                <p className="font-light tracking-wide text-gray-500 md:ml-2">
                  +47 45 84 50 04
                </p>
              </div> */}
                <div className="flex flex-col pb-6 lg:flex-row">
                  <p className="font-semibold text-gray-800">Email:</p>
                  <p className="font-light tracking-wide text-gray-500 md:ml-2">
                    post@atelierbeaute.no
                  </p>
                </div>
                <div className="pb-16">
                  <p className="font-semibold text-gray-800">
                    Vår åpningstider:
                  </p>
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
          {/* <div className="font-lustria my-20 flex w-full flex-col">
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
        </div> */}
        </div>
      </div>
      <div className="mt-20">
        <GoogleMaps />
      </div>
    </>
  );
}
