import Image from "next/image";
import Table from "../Table";

export default function Microblading({ microblading }) {
  return (
    <div className="font-rubik mt-24 flex flex-col items-center md:mt-44">
      <div className="">
        <h2 className="font-poppins mb-4 text-center text-2xl text-gray-700 md:text-3xl">
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
        <div className="mb-20 bg-[#FCFAFA] pt-4 pb-10 lg:px-2">
          {microblading.map(({ title, price, _id, shortDescription }) => (
            <Table
              key={_id}
              treatment={title}
              price={price}
              description={shortDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
