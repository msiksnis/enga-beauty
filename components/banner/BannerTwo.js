import Image from "next/image";
import ToTop from "../ToTop";

export default function BannerTwo() {
  return (
    <div>
      <ToTop />
      <h1 className="text-3xl lg:text-5xl flex justify-center montserrat mb-6 mt-10 lg:mb-10 lg:mt-14 uppercase">
        Vær sunn og pen
      </h1>
      <div className="flex justify-center">
        <Image
          className="object-cover"
          src="/images/pics/hands.jpg"
          width={1200}
          height={2000}
        />
      </div>
    </div>
  );
}
