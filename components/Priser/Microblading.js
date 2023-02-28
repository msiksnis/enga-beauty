import Image from "next/image";
import Table from "../Table";

export default function Microblading({ microblading }) {
  return (
    <div className="font-poppins mt-24 flex flex-col items-center md:mt-44">
      <div className="">
        <h2 className="font-poppins mb-4 text-center text-2xl text-gray-700 md:text-3xl">
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
        <div className="mb-20 bg-[#FCFAFA] pt-4 pb-10">
          {microblading.map(
            ({ title, price, _id, shortDescription, directLink }) => (
              <div key={_id} className="transition-all hover:bg-[#f2ecec]">
                <a
                  href={directLink}
                  rel="noreferrer"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="font-poppins border-b border-gray-200 px-4 pt-3 pb-1 md:mx-10 md:px-10 lg:mx-0 lg:px-2">
                    <div className="flex justify-between">
                      {title}
                      <h3 className="font-rubik whitespace-nowrap pl-6 font-normal opacity-75">
                        {price} kr
                      </h3>
                    </div>
                    <p className="pb-1 text-sm opacity-60">
                      {shortDescription}
                    </p>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
