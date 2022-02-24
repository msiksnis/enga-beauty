import Image from "next/image";
import Link from "next/link";

export default function Paraffin() {
  return (
    <div className="lg:flex lg:mt-56 lg:px-20 flex-row-reverse w-full mt-24">
      <div className="lg:w-1/3">
        <div className="lg:mt-10 mb-4 shadow h-[513px] w-[400px]">
          <Image
            className="object-cover object-top"
            src="/images/pics/Spahand.jpg"
            width={700}
            height={900}
          />
        </div>
      </div>
      <div className="lg:w-2/3">
        <h1 className="lg:text-4xl poppins lg:mb-14 lg:mt-20 mb-6 text-3xl text-center">
          Parafinbehandlinger
        </h1>
        <h2 className="lg:text-xl opacity-70 poppins lg:pr-10 mx-6 text-lg font-light">
          Paraffinvoksbehandling er utmerket alene eller i kombinasjon med
          manikyr eller pedikyr. Den terapeutiske varmebehandlingen slapper av
          såre, slitne hender og føtter, stimulerer blodsirkulasjonen og gir mye
          mer effektiv massasjeopplevelse. Vi prøver vårt beste for å gi kundene
          våre en fantastisk opplevelse og la dem føle seg usedvanlig bortskjemt
          etter alle typer parafinbehandlinger.
        </h2>
        <div className="lg:mb-14 flex justify-center mb-10">
          <button className="lg:mt-10 w-36 lg:w-72 lg:mr-10 lg:py-2 bg-black/90 lg:text-lg hover:bg-white hover:text-black/90 py-1 mt-6 mr-6 text-sm text-white transition duration-200 ease-in-out border border-black rounded shadow-lg">
            <Link href="/pricelist">Prisliste</Link>
          </button>
          <button className="lg:mt-10 w-36 lg:w-72 lg:py-2 lg:text-lg hover:bg-black/90 hover:text-white py-1 mt-6 text-sm transition duration-200 ease-in-out bg-white border border-black rounded shadow-lg">
            <a
              href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestill time
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
