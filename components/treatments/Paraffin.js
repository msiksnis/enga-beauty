import Image from "next/image";
import Link from "next/link";

export default function Paraffin() {
  return (
    <div className="lg:flex flex-row-reverse mt-24 lg:mt-56 w-full lg:px-20">
      <div className="lg:w-1/3">
        <div className="lg:mt-10 mb-4">
          <Image
            className="object-cover object-top"
            src="/images/pics/Spahand.jpg"
            width={700}
            height={900}
          />
        </div>
      </div>
      <div className="lg:w-2/3">
        <h1 className="text-center text-3xl lg:text-4xl poppins mb-6 lg:mb-14 lg:mt-20">
          Parafinbehandlinger
        </h1>
        <h2 className="text-lg lg:text-xl opacity-70 poppins font-light mx-6 lg:pr-10">
          Paraffinvoksbehandling er utmerket alene eller i kombinasjon med
          manikyr eller pedikyr. Den terapeutiske varmebehandlingen slapper av
          såre, slitne hender og føtter, stimulerer blodsirkulasjonen og gir mye
          mer effektiv massasjeopplevelse. Vi prøver vårt beste for å gi kundene
          våre en fantastisk opplevelse og la dem føle seg usedvanlig bortskjemt
          etter alle typer parafinbehandlinger.
        </h2>
        <div className="flex justify-center mb-10 lg:mb-14">
          <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-72 mr-6 lg:mr-10 py-1 lg:py-2 bg-black/90 text-white text-sm lg:text-lg hover:bg-white hover:text-black/90 rounded shadow-lg transition duration-200 ease-in-out">
            <Link href="/pricelist">Prisliste</Link>
          </button>
          <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-72 py-1 lg:py-2 bg-white text-sm lg:text-lg hover:bg-black/90 hover:text-white rounded shadow-lg transition duration-200 ease-in-out">
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
