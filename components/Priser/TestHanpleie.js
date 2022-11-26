import Image from "next/image";

export default function TestHandpleie({ manicureFemale, manicureMale }) {
  return (
    <div className="font-rubik mt-24 flex flex-col items-center md:mt-44">
      <div className="">
        <h2 className="font-poppins mb-4 text-center text-2xl text-gray-700 md:text-3xl">
          Håndpleie
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/handpleie.webp"
            width={1000}
            height={600}
          />
        </div>
        <div className="mb-20 bg-[#FCFAFA] pt-4 pb-10">
          <h3 className="mb-6 flex px-4 text-xl md:px-10 lg:px-2">
            Håndpleie Dame
          </h3>
          {manicureFemale.map(
            ({ title, price, _id, shortDescription, directLink }) => (
              <div key={_id} className="transition-all hover:bg-[#f2ecec]">
                <a
                  href={directLink}
                  rel="noreferrer"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <div className="font-rubik border-b border-gray-200 px-4 pt-3 pb-1 md:mx-10 md:px-10 lg:mx-0 lg:px-2">
                    <div className="flex justify-between">
                      {title}
                      <h3 className="whitespace-nowrap pl-6 font-normal opacity-75">
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
