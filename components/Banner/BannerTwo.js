import { useRef } from "react";

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
              <p className="bannerTwoText uppercase">Love</p>
              <p className="bannerTwoText uppercase">Your</p>
              <p className="bannerTwoText uppercase">Feet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
