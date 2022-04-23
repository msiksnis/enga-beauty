import Image from "next/image";
import Table from "../Table";

export default function VipperBryn() {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-1/2">
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Vipper og Bryn
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
    </div>
  );
}
