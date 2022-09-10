import Image from "next/image";
import Table from "../Table";

export default function Microblading({ microblading }) {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-3/5">
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
          {microblading.map(({ title, price, _id }) => (
            <Table key={_id} treatment={title} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}
