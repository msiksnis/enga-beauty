import Image from "next/image";
import ToTop from "../ToTop";

export default function BannerTwo() {
  return (
    <div className="mt-28 md:mt-40 lg:px-20">
      <ToTop />
      <div className="hidden justify-center md:flex">
        <Image
          className="object-cover"
          src="/images/Carousel1.jpg"
          width={1920}
          height={950}
        />
      </div>
      <div className="flex justify-center md:hidden">
        <Image
          className="object-cover"
          src="/images/Carousel1.jpg"
          width={450}
          height={300}
        />
      </div>
    </div>
  );
}
