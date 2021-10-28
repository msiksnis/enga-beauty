import Image from "next/image";
import Link from "next/link";

export default function SpaManicurePedicure() {
  return (
    <div className="lg:flex flex-row-reverse mt-24 lg:mt-40 w-full lg:px-20">
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
        <h1 className="text-center text-4xl lg:text-4xl poppins mb-6 lg:mb-14 lg:mt-10">
          SPA Manikyr og Pedikyr
        </h1>
        <h2 className="text-lg lg:text-xl opacity-70 poppins font-light mx-6 lg:pl-10">
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
