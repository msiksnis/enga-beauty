import Image from "next/image";
import Table from "../Table";

export default function VareBehandlinger({
  pedicureFemale,
  pedicureMale,
  manicureFemale,
  manicureMale,
  microblading,
  // hudpleie,
  lashes,
  brows,
}) {
  return (
    <div className="font-rubik mt-44 grid gap-5 px-20 pb-20 lg:grid-cols-2 xl:grid-cols-4">
      <div className="mb-10">
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Fotpleie
        </h2>
        <div className="mb-2 hidden">
          <Image
            className="object-cover"
            src="/images/pics/pedicure.png"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-4 pb-10 lg:px-2">
          <h3 className="mb-6 ml-6 flex text-xl md:mx-10 lg:ml-0">
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
          <h3 className="mt-12 mb-6 ml-6 flex text-xl md:mx-10 lg:ml-0">
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

      <div>
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Håndpleie
        </h2>
        <div className="mb-2 hidden">
          <Image
            className="object-cover"
            src="/images/pics/handpleie.webp"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-4 pb-10 lg:px-2">
          <h3 className="mb-6 ml-6 flex text-xl md:ml-10 lg:ml-0">
            Håndpleie Dame
          </h3>
          {manicureFemale.map(({ title, price, _id, shortDescription }) => (
            <Table
              key={_id}
              treatment={title}
              price={price}
              description={shortDescription}
            />
          ))}
          <h3 className="mt-12 mb-6 ml-6 flex text-xl md:mx-10 lg:ml-0">
            Håndpleie Herre
          </h3>
          {manicureMale.map(({ title, price, _id, shortDescription }) => (
            <Table
              key={_id}
              treatment={title}
              price={price}
              description={shortDescription}
            />
          ))}
        </div>
      </div>

      {/* <div>
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Hudpleie
        </h2>
        <div className="mb-2 hidden">
          <Image
            className="object-cover"
            src="/images/pics/tatovering.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-4 pb-10 lg:px-2">
          {hudpleie.map(({ title, price, _id, shortDescription }) => (
            <Table
              key={_id}
              treatment={title}
              price={price}
              description={shortDescription}
            />
          ))}
        </div>
      </div> */}

      <div>
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Vipper & Bryn
        </h2>
        <div className="mb-2 hidden">
          <Image
            className="object-cover"
            src="/images/pics/brows-lashes.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-4 pb-10 lg:px-2">
          <h3 className="mb-6 ml-6 flex text-xl md:mx-10 lg:ml-0">Vippe</h3>
          {lashes.map(({ title, price, _id, shortDescription }) => (
            <Table
              key={_id}
              treatment={title}
              price={price}
              description={shortDescription}
            />
          ))}
          <h3 className="mt-12 mb-6 ml-6 flex text-xl md:mx-10 lg:ml-0">
            Brynsløft
          </h3>
          {brows.map(({ title, price, _id, shortDescription }) => (
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
