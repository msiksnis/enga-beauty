import Image from "next/image";
import Table from "../Table";

export default function Microblading() {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-1/2">
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Tatovering
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/tatovering.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="mb-20 bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
          <Table treatment="Microblading" price="4000" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Powder brows" price="3500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div>
    </div>
  );
}
