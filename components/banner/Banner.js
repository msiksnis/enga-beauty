import Image from "next/image";
import ToTop from "../ToTop";
import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <div className="flex flex-col lg:space-y-6 lg:px-20 mt-32">
      <div className="flex justify-center flex-col lg:flex-row-reverse">
        <Image
          className="object-cover"
          src="/images/pedicure-2.jpg"
          width={720}
          height={500}
        />
        <div className="flex items-center justify-center lg:w-1/2 bg-[#FCFAFA]">
          <BannerCard
            title="SPA Manikyr og Pedikyr"
            text="Spa manikyr og pedikyr er unikt designet for å fjerne død hud ved hjelp av peeling, fuktighetsgivende massasje og neglebåndsbehandling."
            blackBtnTxt="Les mer"
            linkto="spa-manicure-pedicure"
          />
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row">
        <Image
          className="object-cover"
          src="/images/waxing.jpg"
          width={720}
          height={500}
        />
        <div className="flex items-center justify-center lg:w-1/2 bg-[#FCFAFA]">
          <BannerCard
            title="Voksing"
            text="Lurer du på hvilken type voksing som passer til ditt hår og din hudtype? Vi anbefaler deg den mest effektive og passende voksypen gjennom gratis konsultasjon for våre kunder."
            blackBtnTxt="Les mer"
            linkto="waxing"
          />
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row-reverse">
        <Image
          className="object-cover object-top"
          src="/images/paraffin.jpg"
          width={720}
          height={500}
          alt="Beautyful Nails"
        />
        <div className="flex items-center justify-center lg:w-1/2 bg-[#FCFAFA]">
          <BannerCard
            title="Parafin behandlinger"
            text="Den terapeutiske varmebehandlingen slapper av såre, slitne hender og føtter, stimulerer blodsirkulasjonen og gir mye mer effektiv massasjeopplevelse."
            // text="The therapeutic heat treatment relaxes sore, tired hands and feet, stimulates blood circulation and allows for much more effective massage experience."
            blackBtnTxt="Les mer"
            linkto="paraffin"
          />
        </div>
      </div>
      <ToTop />
    </div>
  );
}
