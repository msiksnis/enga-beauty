import Image from "next/image";
import ToTop from "../ToTop";
import Link from "next/link";

export default function BannerTwo() {
  return (
    <div className="mt-28 lg:mt-56">
      <ToTop />
      <h1 className="text-3xl lg:text-5xl flex justify-center montserrat mb-6 mt-10 lg:mb-10 lg:mt-14 uppercase">
        Vær sunn og pen
      </h1>
      <div className="flex justify-center">
        <Link href="/">
          <Image
            className="object-cover"
            src="/images/pics/hands4.jpg"
            width={1200}
            height={2000}
          />
        </Link>
      </div>
    </div>
  );
}
