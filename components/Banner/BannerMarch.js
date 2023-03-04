import Image from "next/image";

export default function BannerMarch() {
  return (
    <div className="mt-24 w-full md:mt-44 xl:px-20">
      <div className="relative">
        <div className="flex justify-center bg-cover">
          <div className="md:hidden">
            <Image
              priority
              src="/images/banner/mobile-banner-march-one.png"
              width={600}
              height={415}
            />
          </div>
          <div className="hidden md:inline">
            <Image
              priority
              src="/images/banner/banner-march-one.png"
              width={1440}
              height={678}
            />
          </div>
        </div>
        <div className="font-arsenal absolute left-6 top-12 w-44 text-left text-xl uppercase tracking-wide text-gray-700 sm:left-28 sm:top-20 sm:leading-tight md:top-24 md:text-[3.3vw] lg:top-32">
          Europeisk Skulpturell Ansiktsmassasje
        </div>
        <button className="font-poppins absolute bottom-16 left-6 rounded border border-gray-900 bg-gray-900 px-8 py-1.5 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:left-28 sm:bottom-24 sm:px-14 sm:py-2.5 sm:text-base md:bottom-24 md:px-20 md:text-lg lg:bottom-28 lg:px-24">
          <a
            href="https://atelierbeaute.as.me/?appointmentType=42284662"
            target="_blank"
            rel="noreferrer"
          >
            Bestill time
          </a>
        </button>
      </div>
    </div>
  );
}
