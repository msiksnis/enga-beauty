import Table from "./Table";

export default function Klippekort() {
  return (
    <div className="montserrat lg:mx-20 lg:mt-60 flex flex-col justify-center mt-24 font-light">
      <h1 className="lg:text-3xl lg:mx-40 mx-10 text-xl font-medium text-center">
        Vi har klippekort på alle våre behandlinger og varigheten på alle
        klippekortene er 1 år.
      </h1>
      <div className="lg:grid lg:mt-20 grid-cols-2 gap-10 mt-10">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="lg:justify-start lg:ml-0 montserrat md:mx-10 lg:mx-0 flex justify-center mt-6 mb-6 ml-6 text-xl font-medium border-b border-gray-200">
            HÅNDPLEIE DAME
          </h4>
          <div className="text-lg">
            <Table treatment="Spa manikyr 8 klipp" price="3600" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 800kr)
            </p>
            <Table
              treatment="Shellack / Gellack ensfarget med mini manikyr 8 klipp"
              price="3500"
            />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 500kr)
            </p>
            <Table
              treatment="Shellack / Gellack med mini manikyr og design 8 klipp"
              price="4600"
            />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1000kr)
            </p>
            <Table treatment="Gelenegler påfyll 8 klipp" price="4500" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1500kr)
            </p>
            <Table treatment="Akrylnegler påfyll 8 klipp" price="4000" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1200kr)
            </p>
            <Table treatment="PolyGele negler påfyll 8 klipp" price="4600" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1000kr)
            </p>
            <Table treatment="Parafinbehandling 8 klipp" price="1500" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 500kr)
            </p>
            <p className="montserrat md:mx-10 lg:mx-0 opacity-60 mb-14 lg:mb-0 mx-6 mt-4 text-sm border-b border-gray-200">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="lg:justify-start lg:ml-0 montserrat md:mx-10 lg:mx-0 flex justify-center mt-6 mb-6 ml-6 text-xl font-medium border-b border-gray-200">
            HÅNDPLEIE HERRE
          </h4>
          <div className="text-lg">
            <Table treatment="Mini manikyr 8 klipp" price="2000" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 400kr)
            </p>
            <Table treatment="Spa manikyr 8 klipp" price="3000" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 600kr)
            </p>
            <Table treatment="Parafinbehandling 8 klipp" price="1500" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 500kr)
            </p>
            <p className="montserrat md:mx-10 lg:mx-0 opacity-60 mb-14 lg:mb-0 mx-6 mt-4 text-sm border-b border-gray-200">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:mt-10 grid-cols-2 gap-10">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="lg:justify-start lg:ml-0 montserrat md:mx-10 lg:mx-0 flex justify-center mt-6 mb-6 ml-6 text-xl font-medium border-b border-gray-200">
            FOTPLEIE DAME
          </h4>
          <div className="text-lg">
            <Table treatment="Mini pedikyr 6 klipp" price="2400" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1200kr)
            </p>
            <Table treatment="SPA pedikyr 6 klipp" price="3200" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1600kr)
            </p>
            <Table treatment="Helt pedikyr 6 klipp" price="4000" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 2000kr)
            </p>
            <Table
              treatment="Dyp fuktighetsgivende pedikyr 6 klipp"
              price="4800"
            />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 2400kr)
            </p>
            <Table treatment="Luksus signatur pedikyr 6 klipp" price="5600" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 2800kr)
            </p>
            <Table treatment="Parafinbehandling 10 klipp" price="2500" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200"></p>

            <p className="montserrat md:mx-10 lg:mx-0 opacity-60 mb-14 lg:mb-0 mx-6 mt-4 text-sm border-b border-gray-200">
              *ved kjøp av dette tilbudet tilsvarer det kun 250kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="lg:justify-start lg:ml-0 montserrat md:mx-10 lg:mx-0 flex justify-center mt-6 mb-6 ml-6 text-xl font-medium border-b border-gray-200">
            FOTPLEIE HERRE
          </h4>
          <div className="text-lg">
            <Table treatment="Mini pedikyr 6 klipp" price="2800" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1400kr)
            </p>
            <Table treatment="SPA pedikyr 6 klipp" price="3600" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 1800kr)
            </p>
            <Table treatment="Helt deluxe pedikyr 6 klipp" price="4400" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 2200kr)
            </p>
            <Table
              treatment="Dyp fuktighetsgivende pedikyr 6 klipp"
              price="5200"
            />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 2600kr)
            </p>
            <Table treatment="Luksus signatur pedikyr 6 klipp" price="6000" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200">
              (du sparer 3000kr)
            </p>
            <Table treatment="Parafinbehandling 10 klipp" price="2500" />
            <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 pb-2 mx-6 border-b border-gray-200"></p>

            <p className="montserrat md:mx-10 lg:mx-0 opacity-60 mb-14 lg:mb-0 mx-6 mt-4 text-sm border-b border-gray-200">
              *ved kjøp av dette tilbudet tilsvarer det kun 250kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="lg:justify-start lg:ml-0 montserrat md:mx-10 lg:mx-0 flex justify-center mt-6 ml-6 text-xl font-medium">
            Voksing
          </h4>
          <p className="lg:justify-start montserrat text-md md:mx-10 lg:mx-0 opacity-60 flex justify-center mx-6 mb-6 border-b border-gray-200">
            Gyldig for alle typer voksing:
          </p>
          <div className="poppins md:mx-10 lg:mx-0 py-2 mx-6 mt-2 font-normal border-b border-gray-200">
            8 klipp / behandlinger - neste behandlinger 40%
          </div>
          <div className="poppins md:mx-10 lg:mx-0 py-2 mx-6 mt-2 font-normal border-b border-gray-200">
            5 klipp / behandlinger- neste behandlinger 30%
          </div>
          <div className="poppins md:mx-10 lg:mx-0 py-2 mx-6 mt-2 font-normal border-b border-gray-200">
            3 klipp / behandlinger- neste behandlinger 20%
          </div>
          <p className="montserrat text-md md:mx-10 lg:mx-0 opacity-60 mx-6 border-b border-gray-200"></p>
        </div>
      </div>
    </div>
  );
}

// <Table treatment="" price="" />
// <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>
