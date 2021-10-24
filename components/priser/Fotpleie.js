import Image from "next/image";
import Table from "../Table";

export default function Fotpleie() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-1/2 mt-10">
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
          <Table treatment="Mini pedikyr" price="600" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="SPA pedikyr" price="800" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Helt deluxe pedikyr" price="1000" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Dyp fuktighetsgivende pedikyr" price="1200" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Luksuriøs signatur pedikyr" price="1400" />
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

          <Table treatment="Mini pedikyr" price="700" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Spa pedikyr" price="900" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Helt deluxe pedikyr" price="1100" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Dyp fuktighetsgivende pedikyr" price="1300" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Luksuriøs signatur pedikyr" price="1500" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Parafinbehandling" price="300" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
        </div>
      </div>
    </div>
  );
}
