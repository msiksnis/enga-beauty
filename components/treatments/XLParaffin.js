import Image from "next/image";
import Link from "next/link";

export default function XLParaffin() {
  return (
    <div className="mt-40 h-[600px] pt-20">
      <div className="">
        <div className="flex bg-[#FEF7F7]">
          <div className="flex w-3/5 flex-col pt-14 pb-14 pl-20">
            <div className="flex justify-center text-4xl">
              Parafinbehandlinger
            </div>
            <div className="mt-10 text-xl font-light tracking-wide opacity-80 ">
              Paraffinvoksbehandling er utmerket alene eller i kombinasjon med
              manikyr eller pedikyr. Den terapeutiske varmebehandlingen slapper
              av såre, slitne hender og føtter, stimulerer blodsirkulasjonen og
              gir mye mer effektiv massasjeopplevelse. Vi prøver vårt beste for
              å gi kundene våre en fantastisk opplevelse og la dem føle seg
              usedvanlig bortskjemt etter alle typer parafinbehandlinger.
            </div>
          </div>
        </div>
        <div className="flex w-3/5 justify-center ml-10 mt-10">
          <button
            className="border border-black w-[17rem] mr-10 py-2 bg-black/90
            text-white text-lg hover:bg-white hover:text-black/90 rounded
            shadow-lg transition duration-200 ease-in-out"
          >
            <Link href="/pricelist">Prisliste</Link>
          </button>
          <button
            className="border border-black w-[17rem] py-2 bg-white text-lg hover:bg-black/90
            hover:text-white rounded shadow-lg transition duration-200 ease-in-out"
          >
            <a
              href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestill time
            </a>
          </button>
        </div>
        <div className="absolute top-44 right-20">
          <Image
            className="object-cover object-top"
            src="/images/pics/Spahand.jpg"
            width={400}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
