import Image from "next/image";
import Table from "../Table";

export default function Handpleie() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-1/2 mt-10">
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
          <Table treatment="Shellack / Gellack med mini manikyr" price="500" />
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
    </div>
  );
}
