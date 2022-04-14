import Image from "next/image";
import ContactForm from "./ContactForm";
import GoogleMaps from "./GoogleMaps";

export default function ContactUs() {
  return (
    <>
      <div className="mt-24 flex w-full flex-col items-center justify-center md:mt-44">
        <div className="md:hidden">
          <Image
            src="/images/ba-10-1.jpeg"
            width={770}
            height={400}
            className="object-cover object-bottom"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/ba-10-1.jpeg"
            width={1440}
            height={400}
            className="object-cover object-bottom"
          />
        </div>
        <div className="my-20 flex flex-col items-center justify-center text-gray-700 md:mb-28">
          <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
            Har du noen spørsmål?
          </h1>
          <div className="mt-1 w-9/12 border-b border-gray-500" />
          <h3 className="font-poppins mt-8 flex px-10 text-center font-light tracking-wide text-gray-500 md:text-lg">
            Du finner oss i Frogner. Vår adresse er Bygdøy allé 10. Velkommen!
          </h3>
          <p className="font-alexbrush mt-[-153px] text-6xl text-[#F4EEEC] opacity-60 md:mt-[-146px] md:text-7xl">
            Kontakt Oss
          </p>
        </div>
      </div>
      <div className="px-4 lg:px-20 xl:px-40">
        <div className="mt-20 flex grid-cols-12 flex-col-reverse md:grid">
          <div className="col-span-7">
            <p className="font-lustria z-10 pb-4 text-center text-2xl capitalize text-gray-700 md:hidden">
              Send Us a Message
            </p>
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
                <p className="font-light tracking-wide text-gray-500">
                  Man - Fre: 09:00 - 21:00
                </p>
                <p className="font-light tracking-wide text-gray-500">
                  Lørdag: 09:00 - 19:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <GoogleMaps />
      </div>
    </>
  );
}
