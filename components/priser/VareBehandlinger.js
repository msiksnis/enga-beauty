import Image from "next/image";
import Table from "../Table";

export default function VareBehandlinger() {
  return (
    <div className="mt-44 grid gap-5 px-20 lg:grid-cols-2 xl:grid-cols-4 ">
      <div className="mb-10">
        <h2 className="montserrat mb-4 flex justify-center text-2xl font-medium md:mx-10">
          Fotpleie
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/pedicure.png"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
          <h3 className="montserrat mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Fotpleie Dame
          </h3>
          <Table treatment="Mini pedikyr" price="600" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="SPA pedikyr" price="800" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Dypt fuktighetsgivende pedikyr" price="1000" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Helt deluxe pedikyr" price="1200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Luksuriøs signatur pedikyr" price="1400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Ensfarget shellack / gellack tær" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Reparasjon av en tær negl" price="50" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Gelenegler nytt sett" price="750" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table
            treatment="Fjerning av gelenegler / polygele negler"
            price="250"
          />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Fjerning av shellack / gellack" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Parafinbehandling" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>

          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Fotpleie Herre
          </h3>

          <Table treatment="Mini pedikyr" price="700" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Spa pedikyr" price="900" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Dypt fuktighetsgivende pedikyr" price="1100" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Helt deluxe pedikyr" price="1300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Luksuriøs signatur pedikyr" price="1500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Parafinbehandling" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div>

      <div>
        <h2 className="montserrat mb-4 flex justify-center text-2xl font-medium md:mx-10">
          Håndpleie
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/Hands2.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] py-4 lg:px-2">
          <h3 className="montserrat mb-6 ml-6 flex text-xl font-medium md:ml-10 lg:ml-0">
            Håndpleie Dame
          </h3>

          <Table treatment="Mini manikyr" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Spa manikyr" price="550" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Gelenegler nytt sett" price="850" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Gelenegler påfyll" price="750" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Akrylnegler  nytt sett" price="750" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Aklrylnegler påfyll" price="650" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="PolyGele negler nytt sett" price="800" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="PolyGele negler påfyll" price="700" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="PolyGele negler på en neglebiter" price="850" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Shellack / Gellack med mini manikyr" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table
            treatment="Shellack / Gellack med mini manikyr og design"
            price="700"
          />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Fjerning av shellack / gellack" price="150" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Fjerning av gelenegler" price="250" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table
            treatment="Parafinbehandling med varmt håndklepakning"
            price="250"
          />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Reparasjon av en negl" price="70" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>

          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Håndpleie Herre
          </h3>

          <Table treatment="Mini manikyr" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Spa manikyr" price="450" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div>

      <div>
        <h2 className="montserrat mb-4 flex justify-center text-2xl font-medium md:mx-10">
          Hårfjerning
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/waxing1.jpeg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
          <h3 className="montserrat mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Kroppsvoksing
          </h3>
          <h3 className="montserrat mt-10 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Kombo voksing (hotpot + strip)
          </h3>
          <Table treatment="Legger" price="350" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Lår" price="350" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Tær" price="100" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikinilinje (Amerikansk)" price="250" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini klassisk" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini pluss" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Hollywood" price="600" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk hel" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk mini" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Armer hel" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Armer halv" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Armhuler" price="250" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Hele ryggen" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Halv ryggen" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Rygg + mage" price="550" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Brasiliansk gravid / sensitiv
          </h3>
          <Table treatment="Brasiliansk hel" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk + legger" price="600" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasilianks + lår" price="700" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk + legger og lår" price="800" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini klassisk" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini pluss" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Ansiktvoksing
          </h3>
          <Table treatment="Bryn med forming" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Overleppe" price="150" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Hake" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Kinn" price="150" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div>

      <div>
        <h2 className="montserrat mb-4 flex justify-center text-2xl font-medium md:mx-10">
          Vipper & Bryn
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/brows-lashes.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
          <h3 className="montserrat mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Vippe
          </h3>
          <Table treatment="Vippebøy" price="600" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Vippebøy med farge" price="800" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Farging av vipper" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Brynsløft
          </h3>
          <Table treatment="Brynsløft uten farge" price="700" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brynsløft med farge" price="800" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brynsløft med farge og form" price="900" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Farging av bryn" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Forming av bryn" price="250" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Farging og forming av bryn" price="450" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table
            treatment="Farging av vipper, bryn og forming av bryn"
            price="550"
          />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div>

      {/* <div>
        <h2 className="montserrat mb-4 flex justify-center text-2xl font-medium md:mx-10">
          Tatovering
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/microblading.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
          <Table treatment="Microblading" price="4000" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Powder brows" price="3500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div> */}
    </div>
  );
}
