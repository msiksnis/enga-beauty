import Image from "next/image";
import Table from "../Table";

export default function Harfjerning() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="w-1/2 mt-10">
        <h2 className="flex lg:justify-center ml-6 md:mx-10 lg:ml-0 montserrat text-2xl mb-4 font-medium">
          Hårfjerning
        </h2>
        <div className="mb-2">
          <Image
            className="object-cover"
            src="/images/pics/vaks1.jpg"
            width={1000}
            height={600}
          />
        </div>
        <div className="bg-[#FCFAFA] pt-1 lg:pt-4 pb-4 lg:px-2">
          <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 font-medium">
            Kroppsvoksing
          </h3>
          <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 mt-10 font-medium">
            Kombo voksing (hotpot + strip)
          </h3>
          <Table treatment="Legger" price="350" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Lår" price="350" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Tær" price="100" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Bikinilinje (Amerikansk)" price="250" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Bikini klassisk" price="300" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Bikini pluss" price="400" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Hollywood" price="600" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brasiliansk hel" price="500" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brasiliansk mini" price="400" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Armer hel" price="300" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Armer halv" price="200" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Armhuler" price="250" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Hele ryggen" price="300" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Halv ryggen" price="200" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Rygg + mage" price="550" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 mt-12 font-medium">
            Brasiliansk gravid / sensitiv
          </h3>
          <Table treatment="Brasiliansk hel" price="500" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brasiliansk + legger" price="600" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brasilianks + lår" price="700" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Brasiliansk + legger og lår" price="800" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Bikini klassisk" price="400" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Bikini pluss" price="500" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <h3 className="flex ml-6 md:mx-10 lg:ml-0 montserrat text-xl mb-6 mt-12 font-medium">
            Ansiktvoksing
          </h3>
          <Table treatment="Bryn med forming" price="200" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Overleppe" price="150" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Hake" price="200" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
          <Table treatment="Kinn" price="150" />
          <p className="montserrat text-sm border-b border-gray-200 md:mx-10 mx-6 lg:mx-0 opacity-60 py-1"></p>
        </div>
      </div>
    </div>
  );
}
