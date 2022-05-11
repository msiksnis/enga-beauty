import Image from "next/image";
import Table from "../Table";

export default function Handpleie() {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-1/2">
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Håndpleie
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/manicure1.png"
            width={1000}
            height={600}
          />
        </div>
        <div className="mb-20 bg-[#FCFAFA] py-4 lg:px-2">
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
    </div>
  );
}
