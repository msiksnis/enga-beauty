import Image from "next/image";

export default function PedicureBanner() {
  return (
    <div className="mt-24 overflow-scroll md:mt-44 xl:px-20">
      <div className="relative">
        <div className="flex justify-center bg-cover">
          <div className="md:hidden">
            <Image
              src="/images/banner/pedicure-banner.jpeg"
              width={770}
              height={500}
            />
          </div>
          <div className="hidden md:inline">
            <Image
              src="/images/banner/pedicure-banner.jpeg"
              width={1240}
              height={620}
            />
          </div>
          <div className="font-lustria absolute top-[8vh] sm:top-[12vh] md:top-[10vh] xl:top-[16vh]">
            <div className="flex flex-col items-center justify-center space-y-2 text-[5vw] leading-tight tracking-wider text-gray-700 md:space-y-5 md:text-[5vw] xl:text-[4vw]">
              <h1 className="uppercase">Spar 40% - Early bird</h1>
              <h1 className="uppercase">Spar 30% - Business hours</h1>
              <h1 className="uppercase">På alle fotpleie</h1>
              <h1 className="uppercase">For dame og here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
