import Image from "next/image";
import Link from "next/link";

export default function XLSpaManicurePedicure() {
  return (
    <div className="pt-20 mt-40">
      <div className="">
        <div className="flex bg-[#FFFAF6]">
          <div className="pt-14 pb-14 flex flex-col w-3/5 pl-20">
            <div className="flex justify-center text-4xl">
              SPA Manikyr og Pedikyr
            </div>
            <div className="opacity-80  mt-10 text-xl font-light tracking-wide">
              <p>
                Hos oss kan du velge mellom 3 typer luksuspedikyr eller 2
                forskjellige mini-og spa pedikyrer. Spa- og pedikyrer fokuserer
                mer på å fjerne død hud og ta vare på neglebånd og negleseng
                etter et deilig boblende massasjefotbad.
              </p>
              <br />
              <p>
                Våre unikt utformede 3 luksuspedikyrer fokusere på velvære ved å
                gi aromamassasje med varme steiner. Massasje med varme steiner
                lindrer muskelspenninger og stivhet samtidig forbedrer
                blodsirkulasjon. Basalt stein er en type vulkansk stein som
                beholder varmen. Massasje av benmuskulaturen, føtter og tær med
                denne steinen forbedrer dine kardiovaskulære reaksjoner og gir
                deg en luksuriøs komfort under massasjen. Etter massasjen vil
                føttene bli behandlet i et parafinvoksbad som fukter huden dypt.
                Parafinvoks er en terapeutisk behandling som er mykgjørende og
                helbredende mot sprukken og tørr hud.
              </p>
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
            src="/images/spa-manicure-pedicure/spa.jpeg"
            width={400}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
