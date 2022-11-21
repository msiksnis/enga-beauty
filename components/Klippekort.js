import Link from "next/link";
import Table from "./Table";

export default function Klippekort({
  klippekortPedicureFemale,
  klippekortPedicureMale,
  klippekortManicureFemale,
  klippekortManicureMale,
}) {
  return (
    <div className="font-rubik mb-20 mt-24 flex flex-col justify-center font-light lg:mx-20 lg:mt-60">
      <h1 className="mx-10 mb-10 text-center text-xl lg:mx-40 lg:mb-10 lg:text-3xl">
        Utløps datoer på klippekortene avhengig av klippekort summen.
      </h1>
      {/* <div className="grid-cols-2 gap-10 lg:grid">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="font-rubik mt-6 mb-6 ml-6 flex justify-center border-b border-gray-200 text-xl md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            HÅNDPLEIE DAME
          </h4>
          <div className="text-lg">
            {klippekortManicureFemale.map(
              ({ title, price, _id, shortDescription }) => (
                <div
                  key={_id}
                  className="font-rubik mx-6 border-b border-gray-200 pt-3 pb-1 md:mx-10 lg:mx-0"
                >
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <h3>{price}kr</h3>
                  </div>
                  <p className="pt-1 text-sm opacity-60">{shortDescription}</p>
                </div>
              )
            )}
            <p className="font-rubik mx-6 mb-14 mt-4 border-b border-gray-200 text-sm opacity-60 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="font-rubik mt-6 mb-6 ml-6 flex justify-center border-b border-gray-200 text-xl md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            HÅNDPLEIE HERRE
          </h4>
          <div className="text-lg">
            {klippekortManicureMale.map(
              ({ title, price, _id, shortDescription }) => (
                <div
                  key={_id}
                  className="font-rubik mx-6 border-b border-gray-200 pt-3 pb-1 md:mx-10 lg:mx-0"
                >
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <h3>{price}kr</h3>
                  </div>
                  <p className="pt-1 text-sm opacity-60">{shortDescription}</p>
                </div>
              )
            )}
            <p className="font-rubik mx-6 mb-14 mt-4 border-b border-gray-200 text-sm opacity-60 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
      </div> */}
      <div className="grid-cols-2 gap-10 lg:mt-10 lg:grid">
        <div className="mb-10 bg-[#FCFAFA] pb-6 pt-2">
          <h4 className="font-rubik mx-4 flex justify-center border-b border-gray-200 pt-7 pb-4 text-xl font-normal md:mx-10 lg:mx-6 lg:justify-start">
            FOTPLEIE DAME
          </h4>
          <div className="text-lg">
            {klippekortPedicureFemale.map(
              ({ title, price, _id, shortDescription, directLink }) => (
                <div
                  key={_id}
                  className="-mt-1 px-4 transition-all hover:bg-[#f2ecec] lg:px-6"
                >
                  <a
                    href={directLink}
                    rel="noreferrer"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <div className="font-rubik border-b border-gray-200 pt-3 pb-1 md:mx-10 lg:mx-0">
                      <div className="flex justify-between">
                        {title}
                        <h3 className="font-normal opacity-75">{price} kr</h3>
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
        <div className="mb-10 bg-[#FCFAFA] pb-6 pt-2">
          <h4 className="font-rubik mx-4 flex justify-center border-b border-gray-200 pt-7 pb-4 text-xl font-normal md:mx-10 lg:mx-6 lg:justify-start">
            FOTPLEIE HERRE
          </h4>
          <div className="text-lg">
            {klippekortPedicureMale.map(
              ({ title, price, _id, shortDescription, directLink }) => (
                <div
                  key={_id}
                  className="-mt-1 px-4 transition-all hover:bg-[#f2ecec] lg:px-6"
                >
                  <a
                    href={directLink}
                    rel="noreferrer"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <div className="font-rubik border-b border-gray-200 pt-3 pb-1 md:mx-10 lg:mx-0">
                      <div className="flex justify-between">
                        {title}
                        <h3 className="font-normal opacity-75">{price} kr</h3>
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
    </div>
  );
}
