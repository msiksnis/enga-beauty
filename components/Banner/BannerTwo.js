import { useRef } from "react";
import WordSwapper from "../WordSwapper/WordSwapper";

export default function BannerTwo() {
  const videoRef = useRef();

  return (
    <div className="mt-24 overflow-scroll md:mt-44 xl:px-40">
      <div className="relative">
        <div className="flex justify-center bg-cover">
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <video
            ref={videoRef}
            poster="/images/video/bgWaves.jpg"
            autoPlay
            playsinline
            loop
            muted
          >
            <source type="video/mp4" src="/images/video/waves-hd.mp4" />
          </video>
          `,
            }}
          ></div>
          <div className="font-poiret absolute top-[2vh] md:top-[6vh] xl:top-[8vh]">
            <div className="flex flex-col items-center justify-center text-[13vw] font-bold leading-tight tracking-[0.25em] text-white md:text-[12vw] xl:text-[9vw]">
              <h1 className="uppercase">Love</h1>
              <h1 className="uppercase">Your</h1>
              <h1 className="uppercase">Feet</h1>
            </div>
          </div>
          {/* <div className="font-lustria absolute top-[6vh] md:top-[18vh] xl:top-[16vh]">
            <div className="flex flex-col items-center justify-center space-y-2 text-[4vw] font-light leading-tight tracking-[0.25em] text-white md:space-y-5 md:text-[4vw] xl:text-[3.5vw]">
              <div className="uppercase">Spar 50% - Early bird</div>
              <div className="uppercase">Spar 40% - Business hours</div>
              <div className="uppercase">På alle fotpleie</div>
              <div className="uppercase">For dame og here</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
