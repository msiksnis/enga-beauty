import Image from "next/image";

export default function Gavekort() {
  return (
    <div className="mx-6 mt-32 flex flex-col items-center md:mx-20 md:mt-44 lg:mt-52 lg:h-screen">
      <h1 className="poppins flex justify-center pb-6 text-center text-2xl lg:mt-0 lg:text-3xl">
        Gavekortet har 6 måneder gyldighet og du kan velge ønsket beløp for
        gavekortet i salongen vår.
      </h1>
      <div className="w-full justify-between md:grid md:grid-cols-2 lg:flex ">
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
