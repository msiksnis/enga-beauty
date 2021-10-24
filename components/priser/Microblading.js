import Image from "next/image";
import Table from "../Table";

export default function Microblading() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-1/2 mt-10">
        <h2 className="flex lg:justify-center ml-6 md:mx-10 lg:ml-0 montserrat text-2xl mb-4 font-medium">
          Tatovering
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
          <Table treatment="Microblading" price="4000" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Powder brows" price="3500" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
        </div>
      </div>
    </div>
  );
}
