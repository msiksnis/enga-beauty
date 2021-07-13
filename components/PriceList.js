import Image from "next/image";
import Table from "./Table";

export default function PriceList() {
  return (
    <div className="mt-5 lg:mt-10 lg:pt-20 lg:mx-20 border-t border-gray-100">
      <h1 className="hidden text-2xl lg:text-4xl montserrat font-medium">
        Prisliste
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-around lg:space-x-6">
        <div className="w-full md:w-96 mt-10">
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-2xl mb-4 font-medium">
            Håndpleie
          </h2>
          <div className="">
            <Image
              className="object-cover"
              src="/images/Handpleie.jpg"
              width={500}
              height={330}
            />
          </div>
          <h3 className="flex ml-6 lg:ml-0 montserrat text-xl mt-4 mb-6 font-medium">
            Håndpleie Dame
          </h3>

          <Table treatment="Mini manikyr" price="350" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Spa manikyr" price="500" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Etterbehandling akryl en farge" price="700" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Etterbehandling akryl ombre" price="800" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Etterbehandling akryl med shellac" price="900" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Etterbehandling gele" price="800" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Etterfyll gele med shellac" price="700" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Fjerning av shellac" price="250" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Shellac/ gelish med mini manikyr" price="500" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Ensfarget shellac/gelish med design" price="700" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Parafinbehandling" price="250" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Reparasjon av en negl" price="80" />
          <p className="montserrat text-sm border-b border-gray-200"></p>

          <h3 className="flex ml-6 lg:ml-0 montserrat text-xl mt-12 mb-6 font-medium">
            Håndpleie Herre
          </h3>

          <Table treatment="Mini manikyr" price="300" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Spa manikyr" price="450" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
        </div>

        <div className="w-full md:w-96 mt-10">
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-2xl mb-4 font-medium">
            Fotpleie
          </h2>
          <Image
            className="object-cover"
            src="/images/Fotpleie.jpg"
            width={500}
            height={330}
          />
          <h3 className="flex ml-6 lg:ml-0 montserrat text-xl mt-4 mb-6 font-medium">
            Fotpleie Dame
          </h3>
          <Table treatment="Mini pedikyr" price="500" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, trim og form, neglebed og neglebåndpleie,
            fotkrem
          </p>
          <Table treatment="SPA pedikyr" price="600" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, trim og form, neglebed og neglebåndpleie,
            fuktighetsgivende krem massasje, varmt håndkle, skrubb, fotkrem
          </p>
          <Table treatment="Helt deluxe pedikyr" price="700" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, trim og form, neglebed og neglebåndpleie,
            aromatisk olje massasje, varm stein, varmt håndkle, skrubb,
            parafinbad, fotkrem
          </p>
          <Table treatment="Dyp fuktighetsgivende pedikyr" price="800" />
          <p className="montserrat text-sm border-b border-gray-200">
            Kokosmelk fotbad, olje massasje, varm stein, varmt håndkle, skrubb,
            parafinbad
          </p>
          <Table treatment="Luksus signature pedikyr" price="900" />
          <p className="montserrat text-sm border-b border-gray-200">
            Kokosmelk fotbad, neglebed og neglebåndpleie, terapeutisk olje
            massasje, varm stein, varmt håndkle, skrubb, parafinbad, fotkrem
          </p>
          <Table treatment="Paraffin behandling" price="300" />
          <p className="montserrat text-sm border-b border-gray-200">
            Salt suge, varm håndkle, skrubb, paraffin bad, fotkrem
          </p>
          <Table treatment="Shellac / gelish" price="450" />
          <p className="montserrat text-sm border-b border-gray-200">
            Ensfarget
          </p>
          <Table treatment="Shellac / gelish" price="550" />
          <p className="montserrat text-sm border-b border-gray-200">Fransk</p>
          <Table treatment="Reparasjon av en negl" price="50" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Nytt sett gelenegler" price="750" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Gelenegler" price="850" />
          <p className="montserrat text-sm border-b border-gray-200">Påfyll</p>
          <Table treatment="Fjerning av" price="300" />
          <p className="montserrat text-sm border-b border-gray-200">
            Gelenegler
          </p>
          <Table treatment="Fjerning av" price="200" />
          <p className="montserrat text-sm border-b border-gray-200">
            Shellac / gelish
          </p>

          <h3 className="flex ml-6 lg:ml-0 montserrat text-xl mt-12 mb-6 font-medium">
            Fotpleie Herre
          </h3>

          <Table treatment="Mini pedikyr" price="450" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, trim og form, neglebed og neglebåndpleie,
            fotkrem
          </p>
          <Table treatment="Spa pedikyr" price="550" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, trim og form, neglebed og neglebåndpleie,
            fuktighetsgivende krem massasje, varmt håndkle, skrubb, fotkrem
          </p>
          <Table treatment="Helt deluxe pedikyr" price="650" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, trim og form, neglebed og neglebåndpleie,
            aromatisk olje massasje, varm stein, varmt håndkle, skrubb,
            parafinbad, fotkrem
          </p>
          <Table treatment="Dyp fuktighetsgivende pedikyr" price="750" />
          <p className="montserrat text-sm border-b border-gray-200">
            Kokosmelk fotbad, neglebed og neglebåndpleie, terapeutisk olje
            massasje, varm stein, varmt håndkle, skrubb, parafinbad, fotkrem
          </p>
          <Table treatment="Luksus signaturer pedikyr" price="850" />
          <p className="montserrat text-sm border-b border-gray-200">
            Kokosmelk fotbad, neglebed og neglebåndpleie, terapeutisk olje
            massasje, varm stein, varmt håndkle, skrubb, parafinbad, fotkrem
          </p>
          <Table treatment="Paraffin behandling" price="300" />
          <p className="montserrat text-sm border-b border-gray-200">
            Mykgjørende salt suge, varm håndkle, paraffin bad, fotkrem
          </p>
        </div>

        <div className="w-full md:w-96 mt-10">
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-2xl mb-4 font-medium">
            Voksing
          </h2>
          <Image
            className="object-cover"
            src="/images/waxing.jpg"
            width={500}
            height={330}
          />
          <h3 className="flex ml-6 lg:ml-0 montserrat text-xl mt-4 mb-6 font-medium">
            Voksing Dame
          </h3>
          <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-4 mb-1 font-medium border-b border-gray-200">
            HOT POT WAXING
          </h4>
          <Table treatment="Brasiliansk Hot Pot voksing" price="599" />
          <p className="montserrat text-sm border-b border-gray-200">
            (Første gang hos oss 499kr)
          </p>
          <Table treatment="Armhuler" price="149" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200">
            STRIP WAXING
          </h4>
          <Table treatment="Bikinilinje" price="299" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Bikini Pluss" price="399" />
          <p className="montserrat text-sm border-b border-gray-200">
            (Innen 5 uke hos oss 399kr)
          </p>
          <Table treatment="Hele armer" price="299" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Halv armer" price="149" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Hele ryggen" price="249" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Hender + fingre" price="99" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Lår" price="299" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Legger" price="249" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Toes" price="99" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200">
            KOMBO WAXING (HOT POT+STRIP)
          </h4>
          <Table treatment="Bikinilinje + lår" price="449" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Bikinilinje+ hele ben" price="599" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Bikini Pluss + legger" price="499" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Bikini + legger" price="399" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Brasiliansk voks + lår" price="699" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Brasiliansk voks + legg" price="599" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Legg + lår" price="449" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Mage" price="199" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Rumpe" price="199" />
          <p className="montserrat text-sm border-b border-gray-200"></p>

          <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200">
            BRAZILIAN SENSITIVE
          </h4>
          <Table treatment="Bikinilinje" price="249" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Bikini plus strip" price="299" />
          <p className="montserrat text-sm border-b border-gray-200"></p>

          <h3 className="flex ml-6 lg:ml-0 montserrat text-xl mt-12 mb-6 font-medium">
            Voksing Herre
          </h3>
          <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-4 mb-1 font-medium border-b border-gray-200">
            HOT POT WAXING
          </h4>
          <Table treatment="Bryn" price="199" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Nostril" price="199" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Armhuler" price="299" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Bryst" price="349" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <h4 className="flex ml-6 lg:ml-0 montserrat text-lg mt-6 mb-1 font-medium border-b border-gray-200">
            STRIP WAXING
          </h4>
          <Table treatment="Rygg" price="399" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Rygg+ skuldre" price="499" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Skuldre" price="299" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Mage" price="249" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Hele armer" price="379" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Halv armer" price="199" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
          <Table treatment="Hele ben" price="699" />
          <p className="montserrat text-sm border-b border-gray-200"></p>
        </div>
      </div>
    </div>
  );
}
