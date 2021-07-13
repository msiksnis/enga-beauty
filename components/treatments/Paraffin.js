import Image from "next/image";
import Link from "next/link";

export default function Paraffin({ blackBtnTxt }) {
  return (
    <div className="mt-4 lg:mt-10 border-t border-gray-200 pt-14 lg:pt-20 lg:pb-40">
      <h1 className="text-center text-4xl lg:text-5xl lora mb-6 lg:mb-14">
        Paraffinbehandlinger
      </h1>
      <h2 className="text-lg lg:text-xl opacity-70 poppins font-light mx-6 lg:mx-40">
        Paraffinvoksbehandling er utmerket alene eller i kombinasjon med manikyr
        eller pedikyr. Den terapeutiske varmebehandlingen slapper av såre,
        slitne hender og føtter, stimulerer blodsirkulasjonen og gir mye mer
        effektiv massasjeopplevelse. Vi prøver vårt beste for å gi kundene våre
        en fantastisk opplevelse og la dem føle seg usedvanlig bortskjemt etter
        alle typer parafinbehandlinger.
      </h2>
      <div className="flex justify-center mb-10 lg:mb-14">
        <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-72 mr-6 lg:mr-10 py-1 lg:py-2 bg-black/90 text-white text-sm lg:text-lg hover:bg-white hover:text-black/90 rounded shadow-lg">
          <Link href="/pricelist">Prisliste</Link>
        </button>
        <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-72 py-1 lg:py-2 bg-white text-sm lg:text-lg hover:bg-black/90 hover:text-white rounded shadow-lg">
          <Link href="/bookTime">Bestill time</Link>
        </button>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-3 lg:mx-40 mt-6">
        <div className="">
          <Image
            className="object-cover object-top"
            src="/images/paraffin/Paraffin3.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/images/paraffin/Paraffin1.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/images/paraffin/Paraffin6.jpg"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
