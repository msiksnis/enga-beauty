import Table from "./Table";

export default function Klippekort({
  klippekortPedicureFemale,
  klippekortPedicureMale,
  klippekortManicureFemale,
  klippekortManicureMale,
}) {
  return (
    <div className="font-poppins mb-20 mt-24 flex flex-col justify-center font-light lg:mx-20 lg:mt-60">
      <h1 className="mx-10 text-center text-xl font-medium lg:mx-40 lg:text-3xl">
        Vi har klippekort på alle våre behandlinger og varigheten på alle
        klippekortene er 1 år.
      </h1>
      <div className="mt-10 grid-cols-2 gap-10 lg:mt-20 lg:grid">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="font-poppins mt-6 mb-6 ml-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            HÅNDPLEIE DAME
          </h4>
          <div className="text-lg">
            {klippekortManicureFemale.map(
              ({ title, price, _id, shortDescription }) => (
                <div
                  key={_id}
                  className="font-poppins mx-6 border-b border-gray-200 py-1 md:mx-10 lg:mx-0"
                >
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <h3>{price}kr</h3>
                  </div>
                  <p className="pt-1 text-sm opacity-60">{shortDescription}</p>
                </div>
              )
            )}
            <p className="font-poppins mx-6 mb-14 mt-4 border-b border-gray-200 text-sm opacity-60 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="font-poppins mt-6 mb-6 ml-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            HÅNDPLEIE HERRE
          </h4>
          <div className="text-lg">
            {klippekortManicureMale.map(
              ({ title, price, _id, shortDescription }) => (
                <div
                  key={_id}
                  className="font-poppins mx-6 border-b border-gray-200 py-1 md:mx-10 lg:mx-0"
                >
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <h3>{price}kr</h3>
                  </div>
                  <p className="pt-1 text-sm opacity-60">{shortDescription}</p>
                </div>
              )
            )}
            <p className="font-poppins mx-6 mb-14 mt-4 border-b border-gray-200 text-sm opacity-60 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
      </div>
      <div className="grid-cols-2 gap-10 lg:mt-10 lg:grid">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="font-poppins mt-6 mb-6 ml-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            FOTPLEIE DAME
          </h4>
          <div className="text-lg">
            {klippekortPedicureFemale.map(
              ({ title, price, _id, shortDescription }) => (
                <div
                  key={_id}
                  className="font-poppins mx-6 border-b border-gray-200 py-1 md:mx-10 lg:mx-0"
                >
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <h3>{price}kr</h3>
                  </div>
                  <p className="pt-1 text-sm opacity-60">{shortDescription}</p>
                </div>
              )
            )}
            <p className="font-poppins mx-6 mb-14 mt-4 border-b border-gray-200 text-sm opacity-60 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 250kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="mb-0 bg-[#FCFAFA] pt-2 lg:px-6 lg:pt-0 lg:pb-6">
          <h4 className="font-poppins mt-6 mb-6 ml-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            FOTPLEIE HERRE
          </h4>
          <div className="text-lg">
            {klippekortPedicureMale.map(
              ({ title, price, _id, shortDescription }) => (
                <div
                  key={_id}
                  className="font-poppins mx-6 border-b border-gray-200 py-1 md:mx-10 lg:mx-0"
                >
                  <div className="flex justify-between">
                    <h1>{title}</h1>
                    <h3>{price}kr</h3>
                  </div>
                  <p className="pt-1 text-sm opacity-60">{shortDescription}</p>
                </div>
              )
            )}
            <p className="font-poppins mx-6 mb-14 mt-4 border-b border-gray-200 text-sm opacity-60 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 250kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
