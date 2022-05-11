import Image from "next/image";
import Table from "../Table";

export default function Fotpleie() {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-1/2">
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
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
        <div className="mb-20 bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
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
    </div>
  );
}
