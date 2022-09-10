import Image from "next/image";
import Table from "../Table";

export default function Handpleie({ manicureFemale, manicureMale }) {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-3/5">
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
          <h3 className="font-poppins mb-6 ml-6 flex text-xl font-medium md:ml-10 lg:ml-0">
            Håndpleie Dame
          </h3>
          {manicureFemale.map(({ title, price, _id }) => (
            <Table key={_id} treatment={title} price={price} />
          ))}

          <h3 className="font-poppins mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Håndpleie Herre
          </h3>
          {manicureMale.map(({ title, price, _id }) => (
            <Table key={_id} treatment={title} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}
