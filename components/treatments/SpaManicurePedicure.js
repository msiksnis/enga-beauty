import Image from "next/image";
import Link from "next/link";

export default function SpaManicurePedicure() {
  return (
    <div className="lg:flex lg:mt-40 lg:px-20 flex-row-reverse w-full mt-24">
      <div className="lg:w-1/3">
        <div className="lg:mt-10 mb-4 shadow h-[513px] w-[400px]">
          <Image
            className="object-cover"
            src="/images/spa-manicure-pedicure/spa.jpeg"
            width={700}
            height={900}
          />
        </div>
      </div>
      <div className="lg:w-2/3">
        <h1 className="lg:text-4xl poppins lg:mb-14 lg:mt-10 mb-6 text-4xl text-center">
          SPA Manikyr og Pedikyr
        </h1>
        <h2 className="lg:text-xl opacity-70 poppins lg:pl-10 mx-6 text-lg font-light">
          <p>
            Hos oss kan du velge mellom 3 typer luksuspedikyr eller 2
            forskjellige mini-og spa pedikyrer. Spa- og pedikyrer fokuserer mer
            på å fjerne død hud og ta vare på neglebånd og negleseng etter et
            deilig boblende massasjefotbad.
          </p>
          <br />
          <p>
            Våre unikt utformede 3 luksuspedikyrer fokusere på velvære ved å gi
            aromamassasje med varme steiner. Massasje med varme steiner lindrer
            muskelspenninger og stivhet samtidig forbedrer blodsirkulasjon.
            Basalt stein er en type vulkansk stein som beholder varmen. Massasje
            av benmuskulaturen, føtter og tær med denne steinen forbedrer dine
            kardiovaskulære reaksjoner og gir deg en luksuriøs komfort under
            massasjen. Etter massasjen vil føttene bli behandlet i et
            parafinvoksbad som fukter huden dypt. Parafinvoks er en terapeutisk
            behandling som er mykgjørende og helbredende mot sprukken og tørr
            hud.
          </p>
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
