import Image from "next/image";

export default function Gavekort() {
  return (
    <div className="flex flex-col justify-center mx-6 lg:mx-20 mt-24 lg:h-[650px]">
      <h1 className="flex text-center justify-center text-2xl lg:text-3xl poppins mt-6 lg:mt-0">
        Gavekortet har 6 måneder gyldighet og du kan velge ønsket beløp for
        gavekortet i salongen vår.
      </h1>
      <div className="flex flex-col lg:flex-row w-full justify-between mt-10">
        <div className="flex justify-center lg:mx-2">
          <Image
            className="object-contain"
            src="/images/gavekort/gavekort1.jpg"
            width={300}
            height={250}
          />
        </div>
        <div className="flex justify-center lg:mx-2">
          <Image
            className="object-contain"
            src="/images/gavekort/gavekort2.jpg"
            width={300}
            height={250}
          />
        </div>
        <div className="flex justify-center lg:mx-2">
          <Image
            className="object-contain"
            src="/images/gavekort/gavekort3.jpg"
            width={300}
            height={250}
          />
        </div>
        <div className="flex justify-center lg:mx-2">
          <Image
            className="object-contain"
            src="/images/gavekort/gavekort4.jpg"
            width={300}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
