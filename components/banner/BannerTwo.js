import Image from "next/image";
import ToTop from "../ToTop";
import Link from "next/link";

export default function BannerTwo() {
  return (
    <div className="lg:mt-36 lg:mx-20">
      <ToTop />
      <div className="hidden lg:flex justify-center">
        <Image
          className="object-cover"
          src="/images/Carousel1.jpg"
          width={1920}
          height={950}
        />
      </div>
      <div className="lg:hidden flex justify-center mt-20">
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
