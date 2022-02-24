import Image from "next/image";

export default function Carousel() {
  return (
    <div className="">
      <div className="lg:flex items-center justify-center hidden mx-20 mt-20 mb-20">
        <Image
          className="object-cover"
          src="/images/Carousel1.jpg"
          width={1500}
          height={700}
        />
      </div>
    </div>
  );
}
