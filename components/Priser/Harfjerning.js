import Image from "next/image";
import Table from "../Table";

export default function Harfjerning() {
  return (
    <div className="mt-24 flex flex-col items-center md:mt-44">
      <div className=" md:w-1/2">
        <h2 className="font-poppins mb-4 flex justify-center text-2xl text-gray-700 md:mx-10 md:text-3xl">
          Hårfjerning
        </h2>
        <div className="mb-2 hidden">
          <Image
            className="object-cover"
            src="/images/pics/waxing1.jpeg"
            width={1000}
            height={600}
          />
        </div>
        <div className="mb-20 bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
          <h3 className="montserrat mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Kroppsvoksing
          </h3>
          <h3 className="montserrat mt-10 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Kombo voksing (hotpot + strip)
          </h3>
          <Table treatment="Legger" price="350" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Lår" price="350" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Tær" price="100" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikinilinje (Amerikansk)" price="250" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini klassisk" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini pluss" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Hollywood" price="600" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk hel" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk mini" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Armer hel" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Armer halv" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Armhuler" price="250" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Hele ryggen" price="300" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Halv ryggen" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Rygg + mage" price="550" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Brasiliansk gravid / sensitiv
          </h3>
          <Table treatment="Brasiliansk hel" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk + legger" price="600" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasilianks + lår" price="700" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Brasiliansk + legger og lår" price="800" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini klassisk" price="400" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Bikini pluss" price="500" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <h3 className="montserrat mt-12 mb-6 ml-6 flex text-xl font-medium md:mx-10 lg:ml-0">
            Ansiktvoksing
          </h3>
          <Table treatment="Bryn med forming" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Overleppe" price="150" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Hake" price="200" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
          <Table treatment="Kinn" price="150" />
          <p className="montserrat mx-6 border-b border-gray-200 py-1 text-sm opacity-60 md:mx-10 lg:mx-0"></p>
        </div>
      </div>
    </div>
  );
}
