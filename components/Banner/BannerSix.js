import Image from "next/image";

export default function BannerSix() {
  return (
    <div className="mt-24 overflow-scroll md:mt-44 xl:px-40">
      <div className="relative">
        <div className="flex justify-center bg-cover">
          <div className="relative md:hidden">
            <Image
              priority
              src="/images/banner/BannerSix.jpg"
              width={680}
              height={510}
              objectFit="cover"
            />
            <a
              href="https://www.instagram.com/atelier_beaute_oslo/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-3.5 bottom-3.5 h-14 w-14 rounded-full"
            ></a>
          </div>
          <div className="relative hidden md:inline">
            <Image
              priority
              src="/images/banner/BannerSix.jpg"
              width={1240}
              height={930}
            />
            <a
              href="https://www.instagram.com/atelier_beaute_oslo/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-16 bottom-12 h-24 w-24 rounded-full"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
