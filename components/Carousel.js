import Image from "next/image";

export default function Carousel() {
  return (
    <div className="">
      <div className="hidden lg:flex justify-center items-center mt-6 mx-20 mb-20">
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
