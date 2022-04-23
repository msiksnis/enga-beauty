import { useRef } from "react";

export default function BannerTwo() {
  const videoRef = useRef();

  return (
    <div className="mt-24 overflow-scroll md:mt-44 xl:px-40">
      <div className="relative">
        <div className="flex absolute top-0 left-0 justify-center bg-cover">
          <video ref={videoRef} autoPlay loop muted>
            <source src="/images/video/waves-hd.mp4" />
          </video>
          <div className="font-poiret absolute top-[2vh] md:top-[6vh] xl:top-[8vh]">
            <div className="flex flex-col items-center justify-center text-[13vw] font-bold leading-tight tracking-[0.25em] text-white md:text-[12vw] xl:text-[9vw]">
              <h1 className="uppercase">Love</h1>
              <h1 className="uppercase">Your</h1>
              <h1 className="uppercase">Feet</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-green-50 py-10">
        <h1 className="text-center text-2xl uppercase">Fotpleie</h1>
        <p className="font-poppins px-4 text-lg tracking-wide text-gray-700">
          Alle de 5 forskjellige typer pedikyr inkluderer profesjonell
          rengjøring av negl og neglebånd, og fotbad med LED og boblemassasje.
          Du får en dyp rens av tørre, sprukne hæler, hard og død med skånsom
          fotfiling teknikk. Føttene pakkes inn i UV-lys desinfiserte varme
          håndklær, etterfulgt av terapioljemassasje for å lindre trette såre
          føtter. De 3 forskjellige luksuriøse pedikyrene inneholder 2 ekstra
          behandlinger som massasje med varme steiner og avslappende varm
          parafinbehandling. Disse to beroligende varmebehandlingene øker
          blodsirkulasjonen og reduserer leddstivheten.
        </p>
      </div> */}
    </div>
  );
}
