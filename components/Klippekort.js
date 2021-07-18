import Table from "./Table";

export default function Klippekort() {
  return (
    <div className="flex flex-col justify-center montserrat font-light lg:mx-20 pt-10 mt-5 lg:pt-20 lg:mt-20 border-t border-gray-100">
      <h1 className="text-xl lg:text-3xl font-medium text-center mx-10 lg:mx-40">
        Vi har klippekort på alle vår behandlinger og varigheten på alle
        klippekortene er 1 år.
      </h1>
      <div className="lg:grid grid-cols-2 gap-10 mt-10 lg:mt-20">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="flex justify-center lg:justify-start text-xl ml-6 lg:ml-0 montserrat mt-6 mb-6 font-medium border-b border-gray-200 md:mx-10 lg:mx-0">
            HÅNDPLEIE DAME
          </h4>
          <div className="text-lg">
            <Table
              treatment="Shellac / Gelish ensfarget med mini manikyr 8 klipp"
              price="3500"
            />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 500kr)
            </p>
            <Table
              treatment="Ensfarget shellac / gelish med design 8 klipp"
              price="4600"
            />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 1000kr)
            </p>
            <Table treatment="Gelenegler nytt sett 8 klipp" price="5400" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 1000kr)
            </p>
            <Table treatment="Spa manikyr 8 klipp" price="3400" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 600kr)
            </p>
            <Table treatment="Parafin behandling 10 klipp" price="2000" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 mt-4 mb-14 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="flex justify-center lg:justify-start text-xl ml-6 lg:ml-0 montserrat mt-6 mb-6 font-medium border-b border-gray-200 md:mx-10 lg:mx-0">
            HÅNDPLEIE HERRE
          </h4>
          <div className="text-lg">
            <Table treatment="Mini manikyr 8 klipp" price="2000" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 400kr)
            </p>
            <Table treatment="Spa manikyr 8 klipp" price="3000" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 600kr)
            </p>
            <Table treatment="Parafin behandling 10 klipp" price="2000" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>
            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 mt-4 mb-14 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-2 gap-10 lg:mt-10">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="flex justify-center lg:justify-start text-xl ml-6 lg:ml-0 montserrat mt-6 mb-6 font-medium border-b border-gray-200 md:mx-10 lg:mx-0">
            FOTPLEIE DAME
          </h4>
          <div className="text-lg">
            <Table treatment="Mini pedikyr 5 klipp" price="2000" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 500kr)
            </p>
            <Table treatment="SPA pedikyr 5 klipp" price="2400" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 600kr)
            </p>
            <Table treatment="Helt pedikyr 5 klipp" price="2800" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 700kr)
            </p>
            <Table
              treatment="Dyp fuktighetsgivende  pedikyr 5 klipp"
              price="3100"
            />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 900kr)
            </p>
            <Table treatment="Luksus signatur pedikyr 5 klipp" price="3500" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 1000kr)
            </p>
            <Table treatment="Parafin behandling 10 klipp" price="2500" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>

            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 mt-4 mb-14 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 250kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="flex justify-center lg:justify-start text-xl ml-6 lg:ml-0 montserrat mt-6 mb-6 font-medium border-b border-gray-200 md:mx-10 lg:mx-0">
            FOTPLEIE HERRE
          </h4>
          <div className="text-lg">
            <Table treatment="Mini pedikyr 5 klipp" price="1800" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 450kr)
            </p>
            <Table treatment="SPA pedikyr 5 klipp" price="2200" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 550kr)
            </p>
            <Table treatment="Helt pedikyr 5 klipp" price="2600" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 650kr)
            </p>
            <Table
              treatment="Dyp fuktighetsgivende  pedikyr 5 klipp"
              price="2950"
            />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 800kr)
            </p>
            <Table treatment="Luksus signatur pedikyr 5 klipp" price="3350" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60">
              (du spar 900kr)
            </p>
            <Table treatment="Parafin behandling 10 klipp" price="2500" />
            <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>

            <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 mt-4 mb-14 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 250kr pr parafinbad
              behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="flex justify-center lg:justify-start text-xl ml-6 lg:ml-0 montserrat mt-6 font-medium md:mx-10 lg:mx-0">
            Voksing
          </h4>
          <p className="flex justify-center lg:justify-start montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 mb-6 opacity-60">
            Gyldig for alle typer voksing:
          </p>
          <div className="font-normal poppins border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 mt-2">
            8 klipp / behandlinger - neste behandlinger 40%
          </div>
          <div className="font-normal poppins border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 mt-2">
            5 klipp / behandlinger- neste behandlinger 30%
          </div>
          <div className="font-normal poppins border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 mt-2">
            3 klipp / behandlinger- neste behandlinger 20%
          </div>
          <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>
        </div>
      </div>
    </div>
  );
}

// <Table treatment="" price="" />
// <p className="montserrat text-md border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60"></p>
