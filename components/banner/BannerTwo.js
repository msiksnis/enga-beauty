import Image from "next/image";
import ToTop from "../ToTop";
import Link from "next/link";

export default function BannerTwo() {
  return (
    <div className="mt-14 lg:mt-36 lg:mx-20">
      <ToTop />
      <div className="flex justify-center">
        <Link href="/">
          <Image
            className="object-cover"
            src="/images/Carousel1.jpg"
            width={1920}
            height={950}
          />
        </Link>
      </div>
    </div>
  );
}
