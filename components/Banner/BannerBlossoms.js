export default function BannerBlossoms() {
  return (
    <div className="mt-24 overflow-scroll md:mt-44 xl:px-40">
      <div className="relative">
        <div className="flex justify-center bg-cover">
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <video
            poster="/images/video/bgBlossoms.jpg"
            autoPlay
            playsinline
            loop
            muted
          >
            <source type="video/mp4" src="/images/video/blossoms.mp4" />
          </video>
          `,
            }}
          ></div>
          <div className="font-lustria absolute top-[6vh] md:top-[15vh] xl:top-[16vh]">
            <div className="flex flex-col items-center justify-center space-y-2 text-[5vw] leading-tight tracking-[0.13em] text-white md:space-y-5 md:text-[5vw] xl:text-[4vw]">
              <div className="uppercase">Spar 30% - Early bird</div>
              <div className="uppercase">Spar 20% - Business hours</div>
              <div className="uppercase">På alle fotpleie</div>
              <div className="uppercase">For dame og here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
