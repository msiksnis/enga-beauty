import Image from "next/image";
import Table from "./Table";

export default function PriceList() {
  return (
    <div className="mt-5 lg:mt-10 lg:pt-20 lg:mx-20 border-t border-gray-100">
      <h1 className="hidden text-2xl lg:text-4xl montserrat font-medium">
        Prisliste
      </h1>
      <div className="flex flex-col lg:flex-row lg:justify-around lg:space-x-6">
        <div className="w-full md:w-80 mt-10">
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-xl mb-4 font-medium">
            Håndpleie Dame
          </h2>
          <div className="">
            <Image
              //   className="object-cover"
              // src="https://lh3.googleusercontent.com/L0sIf6IhwkzW0bOmbucPHO4w77HjYueDqx4HypW2zQW67r61KYdtL7YjmZGQK2NsGvcsl6fvGibcPZFFkfWo_VfJmIQ0tC9chipt5LeLywrAEx6Gatep8gOn8ILfv1WEKmKFGsJxHVcK2Iba4mViuRhSACnVxvhodbLkkFHfk3tnMVqM2KmaOUJshLneSkU6R-nB7p_D8ZDoPrd0wGjc25X9tEyamqAFfwRL_YQQNUppakqldARe28U5rCe6l3LOTJVQGIXd_YWDFMQdEaKI4LahgrCvTwSZ69bpE6n3FOxHAbC-3F3NY4mSj-cKciFsl4-GBwl_qLitA3vNPpWQXe6EHj9JpPDTOUs70JcE_i2XYbHP_jZKLprJiUYgQXspbNIPMU2B3VhcT-FTyts6JCY50fK7rOcV4WAP1AA2EldMRiar0VCUGhd-oUq6SgMb2Kae9dwoxiM4gAIc1N_pkdo49oLd1lek84ipE62B-20w6pARS5v0NDt_XNB4-8n-qhk_o7Lmw_OK6_ctRQ5ymsqoL0dyixxzyljy8JmEYDAFOChJmgN7vC4x8pUuMQ0-xBSx5haJ-tt3D2ks33CJEF9DkNsJROWBPhmdhV65Vt-14XzFz3f-aJGEijgIXox44B6ImEBTNCIYy-wArpHt7E9IdZdhpQabwc3FVj9CXGW2v4dkJ_1E_qlVNTyTQ6B8fKWUzZaoYJNzZ79hi_BwHFk=w832-h599-no?authuser=0"
              src="/images/Handpleie.jpg"
              width={428}
              height={270}
            />
          </div>
          <Table treatment="Manikyr" price="399" />
          <Table treatment="Minimanikyr" price="299" />
          <Table treatment="Etterbehandling akryl en farge" price="699" />
          <Table treatment="Etterbehandling akryl ombre" price="799" />
          <Table treatment="Etterbehandling akryl med gelelakk" price="899" />
          <Table treatment="Etterbehandling Gele" price="799" />
          <Table treatment="Etterfyll Gele m/gelelakk" price="699" />
          <Table treatment="Fjerning av gelelakk" price="249" />
          <Table
            treatment="Gelelakk m/manikyr og fjerning av gelelakk/shellac"
            price="649"
          />
          <Table treatment="Ensgarfet gelelakk med manikyr" price="499" />
          <Table treatment="Flerfarget gelelakk med manikyr" price="599" />
          <Table treatment="Ensfarget gelelakk med design" price="699" />
          <Table treatment="Parafinbehandling" price="249" />
          <Table treatment="Reparasjon av en negl" price="79" />
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-xl mb-4 mt-12 font-medium">
            Håndpleie Herre
          </h2>
          <Table treatment="Håndpleie + Spa manikyr" price="299" />
          <Table treatment="Parafinbehandling" price="299" />
        </div>
        <div className="w-full md:w-80 mt-10">
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-xl mb-4 font-medium">
            Fotpleie Dame
          </h2>
          <Image
            className="object-cover"
            // src="https://lh3.googleusercontent.com/AwiWOyw5mF0s9qxg12YhK_ofrRQ7P9RqcPAl7R7kGQxsq6ljQbamKaNb4Y99pUVyigkHf9tI_dcXYqK3yvwNdJN2AmLemICQz7vpd0arO120HKNKSeIKqvYCTuRuwN4Ff-lWjPFloneI8IitvpysELyAkxZh9FP4ik-LTGCDGYYy5ej7mmTce7tziV5xJIz4PF0kv_JiYemAH_2GCQJrYB-MywXA4kaODAEA-rrC46Uoe7j3tc6wG5kcRPrV5dULjxEWXZjzZG-MpzamBCpE8_gepzrA6cim_fjfE9Vv4idTZoYOa4m4hCf_V0ou9owL7_mUXEYkzdQ8LPv-TshkCxQ7DZlClJ9czd4uAJTOE3pw-fT1xAVs32GN7hCe8-jsYn6eVuCXZE2EQ-cu8mDvNrza66PAyPJaMk8HzURhTv3UTLBxwVgajVc4tTmZuY5YHe6QquvJ6ANVbxs0gNTBjezwuCc7GTjUoN7XGFlzzuuJPXusqcAcAnvskMeBQVHTBypUxsYAVXSu2jotPGPILZy366gHBQOwzrwXtn1qT9fxyMCpJX273ALmTynzlyvPxP_Ae6On2OBa8QSzhyrr4bbwHd_n_oMvd6cmNEWRDitRpsxZfg6vScVi5p5vfBYoszsROcfuFAHI9OrMXVn0grFmzH8eDmN59vZkW9_k0_LqzfbbXElumpYYxR5_OT4j5mFiDGXylyDiM9BuPBRAQZM=w1920-h1280-no?authuser=0"
            src="/images/Fotpleie.jpg"
            width={428}
            height={270}
          />
          <Table treatment="Fotpleie + pedikyr" price="549" />
          <Table treatment="Fotpleie + pedikyr med gelelakk" price="749" />
          <Table treatment="Fotpleie + nytt sett gelenegler" price="799" />
          <Table treatment="Fjerning av gelenegler m/minimanikyr" price="349" />
          <Table
            treatment="Fjerning av gelelakk/shellac m/ minimanikyr"
            price="249"
          />
          <Table treatment="Parafinbehandling" price="299" />
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-xl mb-4 mt-12 font-medium">
            Fotpleie Herre
          </h2>
          <Table treatment="Fotpleie + Spa pedikyr" price="599" />
        </div>
        <div className="w-full md:w-80 mt-10">
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-xl mb-4 font-medium">
            Voksing Dame
          </h2>
          <Image
            className="object-cover"
            // src="https://lh3.googleusercontent.com/HrduCXRVdkN9Ozs6FN7PHzzCAhV2vG7cg6diq_ooYw8EC_7QXdyHj2g2LpudUxk6YCHbqpHFYFUdq_gHdmoWjGqfU-kLSTlnu4gn5tyW5rU5-B6tg8IzWHa5lzPOwpxL4jVwjTqFEyKhLwaIQed4-JMj6CNK9rf9NZ-b5RF2SKVCCUh5LZ-mdZHL7qVReVCN6f8WsS_uTFJKqdZWBFtNVOg7XGdecuiVXwWhGzTVahrw8yQOfzNlPT7SGW7e4yPDKYMo1IiTjchJy0Is9-bnvP8SrtCJkzUrXqzwwM4JG3ldyY7JbG7he1RAzoDE3MKn9XBbLDKPGrjKvYpC0PIP66gIvdWlBRsCi34A1yB3w-f4Z-KzrQbIavhAkJ1ATpy3m0MLtIi7tCF3IiXwbWXhJnfDrNLK-tECLTEzAlMw6WoqnjjFyGBiOPNncKzCO9m81PoV1y2WG1OXA3itWMBzwzAGZVFtqp9KxjLLxkNoDbChgHVVwwVStRzkszyqjQygG4oGcUeVSTcdZPwi48qtgtseUkRodqouP9HM3XApAnemPUvHnQK3HUzgm9aPrqPMlBSFBqWfAfcMdpc-zapBr2IoopToeswXHV405nZL_OOv04WXxeeiZz7z39SAX7zpMfeZNeb081zAb-_2aRHy15_JOfSePJmoqai1D1-RuIWgaA7yrcxo0dBim_L55lYW_489KMUw4ufVsKpDUlW_08Q=w917-h667-no?authuser=0"
            src="/images/waxing.jpg"
            width={428}
            height={270}
          />
          <Table
            treatment="Brasiliansk Hotwax (Første gang hos oss 399kr)"
            price="499"
          />
          <Table treatment="Brasiliansk Pluss ( stort område)" price="649" />
          <Table treatment="Innen 5 uke hos oss" price="349" />
          <Table treatment="Bikinilinje + lår" price="449" />
          <Table treatment="Bikinilinje+ hele ben" price="599" />
          <Table treatment="Bikini Pluss + legger" price="499" />
          <Table treatment="Bikini + legger" price="399" />
          <Table treatment="Brasiliansk voks + lår" price="699" />
          <Table treatment="Brasiliansk voks + legg" price="599" />
          <Table treatment="Legg + lår" price="449" />
          <Table treatment="Voks overleppe" price="99" />
          <Table treatment="Voks Hender + fingre" price="99" />
          <Table treatment="Voks hele armer" price="299" />
          <Table treatment="Voks halv armer" price="149" />
          <Table treatment="Voks armhule" price="149" />
          <Table treatment="Voks av mage" price="249" />
          <Table treatment="Voks av hele ryggen" price="249" />
          <Table treatment="Voks rumpe" price="299" />
          <Table treatment="Voks bikinilinje" price="199" />
          <Table treatment="Voks bikini Plus" price="299" />
          <Table treatment="Voks Lår" price="299" />
          <Table treatment="Voks Legger" price="249" />
          <h2 className="flex lg:justify-center ml-6 lg:ml-0 montserrat text-xl mb-4 mt-12 font-medium">
            Voksing Herre
          </h2>
          <Table treatment="Hele ben" price="599" />
          <Table treatment="Voks hele armer" price="399" />
          <Table treatment="Voks halv armer" price="199" />
          <Table treatment="Armhuler" price="199" />
          <Table treatment="Voks av mage" price="299" />
          <Table treatment="Rygg" price="349" />
          <Table treatment="Rygg + skuldre" price="499" />
          <Table treatment="Bryst" price="299" />
        </div>
      </div>
    </div>
  );
}
