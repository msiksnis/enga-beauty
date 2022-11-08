import Image from "next/image";

export default function BannerNovember() {
  return (
    <div className="mt-14 overflow-scroll md:mt-44 xl:px-20">
      <div className="relative">
        <div className="flex justify-center bg-cover">
          <div className="md:hidden">
            <Image
              priority
              src="/images/banner/mobile_banner_november.png"
              width={440}
              height={620}
            />
          </div>
          <div className="hidden md:inline">
            <Image
              priority
              src="/images/banner/desktop_banner_november.png"
              width={1240}
              height={620}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
