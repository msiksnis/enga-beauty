import Image from "next/image";
import Link from "next/link";

export default function Waxing() {
  return (
    <div className="lg:flex lg:mt-40 lg:px-20 flex-row-reverse w-full mt-24">
      <div className="lg:w-1/3">
        <div className="lg:mt-10 mb-4 shadow-md h-[513px] w-[400px]">
          <Image
            className="object-cover"
            src="/images/waxing/waxing5.jpg"
            width={700}
            height={900}
          />
        </div>
      </div>
      <div className="lg:w-2/3">
        <h1 className="lg:text-4xl poppins lg:mb-14 lg:mt-10 mb-6 text-4xl text-center">
          Voksing
        </h1>
        <h2 className="lg:text-xl opacity-70 poppins lg:pl-10 mx-6 text-lg font-light">
          Lurer du på hvilken type voksing som passer til ditt hår og din
          hudtype? Vi anbefaler deg den mest effektive og passende voksypen
          gjennom gratis konsultasjon for våre kunder. Hvis du er redd for
          smerte for voksing av følsomme områder som bikini og underarm, er
          voksing fra Hollywood Hotpot perfekt for deg. Varmen fra voksen åpner
          porene og fremmer hydrering av huden som resulterer i færre inngrodde
          hår, mindre brudd og derfor lengre perioder med vekst. ALLE hår i
          området vil være borte. Hvis du har tykkere hår med mindre følsom hud
          anbefaler vi våre kunder å velge stripevoks til din brasilianske /
          bikini voksing. Det vil raskt fjerne hår utenfor og over bikinilinjen,
          men også perfekt for store områder som rygg, armer, mage, lår og ben.
          Det tar mindre enn halvparten av tiden å lage en Hollywood-voks.
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
