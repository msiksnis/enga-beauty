import Image from "next/image";
import Table from "../Table";

export default function VipperBryn() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-1/2 mt-10">
        <h2 className="flex lg:justify-center ml-6 md:mx-10 lg:ml-0 montserrat text-2xl mb-4 font-medium">
          Vipper og Bryn
        </h2>
        <div className="hidden mb-2">
          <Image
            className="object-cover"
            src="/images/pics/vaks1.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-1 lg:pt-4 pb-4 lg:px-2">
          <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 font-medium">
            Vippe
          </h3>
          <Table treatment="Vippebøy" price="600" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Vippebøy med farge" price="800" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Farging av vipper" price="300" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 mt-12 font-medium">
            Brynsløft
          </h3>
          <Table treatment="Brynsløft uten farge" price="700" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brynsløft med farge" price="800" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brynsløft med farge og form" price="900" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Farging av bryn" price="200" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Forming av bryn" price="250" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Farging og forming av bryn" price="450" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table
            treatment="Farging av vipper, bryn og forming av bryn"
            price="550"
          />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
        </div>
      </div>
    </div>
  );
}
