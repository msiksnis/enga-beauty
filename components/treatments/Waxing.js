import Image from "next/image";
import Link from "next/link";

export default function Waxing({ blackBtnTxt }) {
  return (
    <div className="mt-4 lg:mt-10 border-t border-gray-200 pt-14 lg:pt-20 lg:pb-40">
      <h1 className="text-center text-4xl lg:text-5xl lora mb-6 lg:mb-14">
        Voksing
      </h1>
      <h2 className="text-lg lg:text-xl opacity-70 poppins font-light mx-6 lg:mx-40">
        Lurer du på hvilken type voksing som passer til ditt hår og din hudtype?
        Vi anbefaler deg den mest effektive og passende voksypen gjennom gratis
        konsultasjon for våre kunder. Hvis du er redd for smerte for voksing av
        følsomme områder som bikini og underarm, er voksing fra Hollywood Hotpot
        perfekt for deg. Varmen fra voksen åpner porene og fremmer hydrering av
        huden som resulterer i færre inngrodde hår, mindre brudd og derfor
        lengre perioder med vekst. ALLE hår i området vil være borte. Hvis du
        har tykkere hår med mindre følsom hud anbefaler vi våre kunder å velge
        stripevoks til din brasilianske / bikini voksing. Det vil raskt fjerne
        hår utenfor og over bikinilinjen, men også perfekt for store områder som
        rygg, armer, mage, lår og ben. Det tar mindre enn halvparten av tiden å
        lage en Hollywood-voks.
      </h2>
      <div className="flex justify-center mb-10 lg:mb-14">
        <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-72 mr-6 lg:mr-10 py-1 lg:py-2 bg-black/90 text-white text-sm lg:text-lg hover:bg-white hover:text-black/90 rounded shadow-lg">
          <Link href="/pricelist">Prisliste</Link>
        </button>
        <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-72 py-1 lg:py-2 bg-white text-sm lg:text-lg hover:bg-black/90 hover:text-white rounded shadow-lg">
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bestill time
          </a>
        </button>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-3 lg:mx-40 mt-6">
        <div className="">
          <Image
            className="object-cover"
            src="/images/waxing/waxing1.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/images/waxing/waxing4.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="">
          <Image
            className="object-cover"
            src="/images/waxing/waxing3.jpg"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}