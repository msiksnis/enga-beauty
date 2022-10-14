import Image from "next/image";

export default function Gavekort({ giftcards }) {
  return (
    <div className="mx-6 mt-32 flex flex-col items-center md:mx-20 md:mt-44 lg:mt-52 lg:h-screen">
      <h1 className="poppins flex justify-center pb-6 text-center text-2xl lg:mt-0 lg:text-3xl">
        Gavekortet har 6 måneder gyldighet og du kan velge ønsket beløp for
        gavekortet i salongen vår.
      </h1>
      <div className="w-full justify-between md:grid md:grid-cols-2 lg:flex ">
        {giftcards.map((giftcard) => (
          <div key={giftcard._id} className="flex justify-center lg:mx-2">
            <Image
              className="object-contain"
              src={giftcard.imageUrl}
              width={300}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
