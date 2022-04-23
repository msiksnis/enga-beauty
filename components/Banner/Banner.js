import Image from "next/image";
import ToTop from "../ToTop";

export default function Banner() {
  return (
    <div className="mt-28 md:mt-40 lg:px-20">
      {/* <ToTop /> */}
      <div className="hidden justify-center md:flex">
        <Image
          className="object-cover"
          src="/images/pics/legs-water.jpeg"
          width={1920}
          height={950}
        />
      </div>
      <div className="flex justify-center md:hidden">
        <Image
          className="object-cover"
          src="/images/pics/legs-water.jpeg"
          width={450}
          height={300}
        />
      </div>
    </div>
  );
}
