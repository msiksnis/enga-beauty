import Image from "next/image";
import ToTop from "../ToTop";
import Link from "next/link";

export default function BannerTwo() {
  return (
    <div className="mt-14 lg:mt-32 lg:mx-40">
      <ToTop />
      <div className="flex justify-center">
        <Link href="/">
          <Image
            className="object-cover"
            src="/images/landing.jpeg"
            width={1920}
            height={1080}
          />
        </Link>
      </div>
    </div>
  );
}

// <h1 className="text-3xl lg:text-5xl flex justify-center montserrat mb-6 mt-10 lg:mb-10 lg:mt-14 uppercase">
//   Vær sunn og pen
// </h1>
