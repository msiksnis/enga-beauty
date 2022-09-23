import Image from "next/image";
import Table from "../Table";

export default function TestFotpleie({ pedicureFemale, pedicureMale }) {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-3/5">
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
        <div className="mb-20 bg-[#FCFAFA] pt-4 pb-10 lg:px-2">
          <h3 className="font-poppins mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Fotpleie Dame
          </h3>
          {pedicureFemale.map(({ title, price, _id, shortDescription }) => (
            <Table
              key={_id}
              treatment={title}
              price={price}
              description={shortDescription}
            />
          ))}
          <h3 className="font-poppins mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Fotpleie Herre
          </h3>

          {pedicureMale.map(({ title, price, _id, shortDescription }) => (
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
