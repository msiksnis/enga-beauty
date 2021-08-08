import Image from "next/image";
import Table from "./Table";
import ToTop from "../components/ToTop";

export default function PriceList() {
  return (
    <div className="mt-10 lg:mt-24 lg:pt-20 lg:mx-20 border-t border-gray-100">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:space-x-6">
        <div className="w-full  mt-10">
          <h2 className="flex lg:justify-center ml-6 md:ml-10 lg:ml-0 montserrat text-2xl mb-4 font-medium">
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
            <h3 className="flex ml-6 md:ml-10 lg:ml-0 montserrat text-xl mb-6 font-medium">
              Håndpleie Dame
            </h3>

            <Table treatment="Mini manikyr" price="400" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Spa manikyr" price="550" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Gelenegler nytt sett" price="850" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Gelenegler påfyll" price="750" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Akrylnegler  nytt sett" price="750" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Aklrylnegler påfyll" price="650" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="PolyGele negler nytt sett" price="800" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="PolyGele negler påfyll" price="700" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="PolyGele negler på en neglebiter" price="850" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table
              treatment="Shellack / Gellack med mini manikyr"
              price="500"
            />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table
              treatment="Shellack / Gellack med mini manikyr og design"
              price="700"
            />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Fjerning av shellack / gellack" price="150" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Fjerning av gelenegler" price="250" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table
              treatment="Parafinbehandling med varmt håndklepakning"
              price="250"
            />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Reparasjon av en negl" price="70" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>

            <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mt-12 mb-6 font-medium">
              Håndpleie Herre
            </h3>

            <Table treatment="Mini manikyr" price="300" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Spa manikyr" price="450" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          </div>
        </div>
        <div className="w-full  mt-10">
          <h2 className="flex lg:justify-center ml-6 md:mx-10 lg:ml-0 montserrat text-2xl mb-4 font-medium">
            Fotpleie
          </h2>
          <div className="mb-2">
            <Image
              className="object-cover"
              src="/images/pics/foot1.jpg"
              width={1000}
              height={600}
            />
          </div>
          <div className="bg-[#FCFAFA] pt-1 lg:pt-4 pb-4 lg:px-2">
            <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 font-medium">
              Fotpleie Dame
            </h3>
            <Table treatment="Mini pedikyr" price="500" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="SPA pedikyr" price="600" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Helt deluxe pedikyr" price="700" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Dyp fuktighetsgivende pedikyr" price="800" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Luksuriøs signatur pedikyr" price="900" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Ensfarget shellack / gellack tær" price="500" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Reparasjon av en tær negl" price="50" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Gelenegler nytt sett" price="750" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table
              treatment="Fjerning av gelenegler / polygele negler"
              price="250"
            />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Fjerning av shellack / gellack" price="200" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Parafinbehandling" price="300" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>

            <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mt-12 mb-6 font-medium">
              Fotpleie Herre
            </h3>

            <Table treatment="Mini pedikyr" price="500" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Spa pedikyr" price="650" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Helt deluxe pedikyr" price="750" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Dyp fuktighetsgivende pedikyr" price="850" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Luksuriøs signatur pedikyr" price="950" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Parafinbehandling" price="300" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          </div>
        </div>

        <div className="w-full  mt-10">
          <h2 className="flex lg:justify-center ml-6 md:mx-10 lg:ml-0 montserrat text-2xl mb-4 font-medium">
            Voksing
          </h2>
          <div className="mb-2">
            <Image
              className="object-cover"
              src="/images/pics/vaks1.jpg"
              width={1000}
              height={600}
            />
          </div>
          <div className="bg-[#FCFAFA] pt-1 lg:pt-4 pb-4 lg:px-2">
            <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 font-medium">
              Voksing Dame
            </h3>
            <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mb-1 font-medium border-b border-gray-200 md:mx-10">
              HOT POT VOKSING DAME
            </h4>
            <Table treatment="Brasiliansk Hot Pot voksing" price="600" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1">
              (Første gang hos oss 500kr)
            </p>
            <Table treatment="Armhuler" price="150" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200 md:mx-10">
              STRIP VOKSING DAME
            </h4>
            <Table treatment="Bikinilinje" price="280" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikini Pluss" price="400" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1">
              (Innen 5 uke hos oss 320kr)
            </p>
            <Table treatment="Hele armer" price="300" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Halv armer" price="150" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Hele ryggen" price="250" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Hender + fingre" price="100" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Lår" price="300" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Legger" price="250" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Tær" price="100" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>

            <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200 md:mx-10">
              KOMBO VOKSING DAME (HOT POT + STRIP)
            </h4>
            <Table treatment="Bikinilinje + lår" price="500" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikinilinje + hele ben" price="600" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikini Pluss + legger" price="500" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikini + legger" price="400" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Brasiliansk voks + lår" price="700" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Brasiliansk voks + legg" price="600" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Legg + lår" price="450" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Mage" price="200" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Rumpe" price="200" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>

            <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200 md:mx-10">
              BRAZILIANSK SENSITIV
            </h4>
            <Table treatment="Bikinilinje" price="250" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikini plus strip" price="300" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>

            <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200 md:mx-10">
              BRAZILIANSK GRAVID
            </h4>
            <Table treatment="Braziliansk" price="600" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikini" price="450" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Bikini Pluss" price="500" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Braziliansk + legger" price="600" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Brazilian + lår" price="700" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Brazilian + legger og lår" price="800" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>

            <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200 md:mx-10">
              VOKSING AV ANSIKT
            </h4>
            <Table treatment="Bryn med forming" price="200" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Kun ansikt" price="400" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Overleppe" price="100" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
            <Table treatment="Kinn" price="150" />
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          </div>
        </div>
      </div>
      <ToTop />
    </div>
  );
}
