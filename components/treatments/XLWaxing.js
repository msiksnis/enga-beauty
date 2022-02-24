import Image from "next/image";
import Link from "next/link";

export default function XLWaxing() {
  return (
    <div className="pt-20 mt-40">
      <div className="">
        <div className="flex bg-[#FFFAF6]">
          <div className="pt-14 pb-14 flex flex-col w-3/5 pl-20">
            <div className="flex justify-center text-4xl">Voksing</div>
            <div className="opacity-80  mt-10 text-xl font-light tracking-wide">
              Lurer du på hvilken type voksing som passer til ditt hår og din
              hudtype? Vi anbefaler deg den mest effektive og passende voksypen
              gjennom gratis konsultasjon for våre kunder. Hvis du er redd for
              smerte for voksing av følsomme områder som bikini og underarm, er
              voksing fra Hollywood Hotpot perfekt for deg. Varmen fra voksen
              åpner porene og fremmer hydrering av huden som resulterer i færre
              inngrodde hår, mindre brudd og derfor lengre perioder med vekst.
              ALLE hår i området vil være borte. Hvis du har tykkere hår med
              mindre følsom hud anbefaler vi våre kunder å velge stripevoks til
              din brasilianske / bikini voksing. Det vil raskt fjerne hår
              utenfor og over bikinilinjen, men også perfekt for store områder
              som rygg, armer, mage, lår og ben. Det tar mindre enn halvparten
              av tiden å lage en Hollywood-voks.
            </div>
          </div>
        </div>
        <div className="flex justify-center w-3/5 mt-10 ml-10">
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
        <div className="absolute top-44 right-20 h-[550px] w-[400px] shadow">
          <Image
            className="object-cover object-top"
            src="/images/waxing/waxing5.jpg"
            width={400}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
