import Image from "next/image";
import Link from "next/link";

export default function SpaManicurePedicure({ blackBtnTxt }) {
  return (
    <div className="mt-4 lg:mt-10 border-t border-gray-200 pt-14 lg:pt-20 lg:pb-40">
      <h1 className="text-center text-4xl lg:text-5xl lora mb-6 lg:mb-14">
        SPA Manicure and Pedicure
      </h1>
      <h2 className="text-lg lg:text-xl opacity-70 poppins font-light mx-6 lg:mx-40">
        Rene og godt vedlikeholdte hender og ben gir et godt inntrykk.
        Spa-manikyrene og pedikyrene våre er unikt designet for å fjerne død
        huden gjennom massering med peeling og fuktighetsgivende, og
        neglebåndsbehandlinger som: aromatisk saltskrubb, fuktighetsgivende
        maske, dampet varmt håndklepakning, massasje med varm stein med
        luksuriøse kremer og oljer eller parafin. Massasje fra en profesjonell
        manikyr eller pedikyr hjelper til med å gi utrolig avslapning og hjelper
        også til å øke blodstrømmen. Våre spa mani-pedi-behandlinger vil gi deg
        et avslappende sinn og avlaste deg fra stress og spenninger samtidig som
        du får nydelige negler og vakkert preparerte hender og føtter! Vi
        steriliserer utstyret vårt i varmluftsterilisator ved 250 grader for å
        beskytte våre kunder mot potensielle risikoer som kan føre til
        infeksjon.
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
            className="object-cover"
            src="/images/spa-manicure-pedicure/4561408.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/images/spa-manicure-pedicure/spapedicure.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/images/spa-manicure-pedicure/1918035.jpg"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
