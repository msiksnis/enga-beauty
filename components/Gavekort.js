import Image from "next/image";

export default function Gavekort({ giftcards }) {
  return (
    <div className="mx-6 mt-32 flex flex-col items-center md:mx-20 md:mt-44 lg:mt-52 lg:min-h-screen">
      <h2 className="font-poppins flex justify-center pb-10 pt-6 text-center text-lg font-light text-gray-700 lg:pt-6 lg:text-3xl">
        Velg og kjøp favorit behandlingen din med gavekort. Vi sender digitalt
        til din e-post. Ring hos oss på 45 84 50 04 eller send en mail til
        post@atelierbeaute.no for å booke gavekort timen din.
      </h2>
      <div className="w-full items-center md:grid md:grid-cols-2 md:gap-10 lg:flex">
        {giftcards.map((giftcard) => (
          <div key={giftcard._id} className="flex justify-center lg:mx-2">
            <Image
              className="object-contain"
              src={giftcard.imageUrl}
              width={400}
              height={330}
            />
          </div>
        ))}
      </div>
      <h2 className="font-poppins mb-40 flex justify-center pt-6 text-center text-lg font-extralight text-gray-700 lg:mt-0 lg:pt-10 lg:text-xl">
        Gavekortet har 6 måneder gyldighet og du kan velge ønsket beløp for
        gavekortet i salongen vår.
      </h2>
    </div>
  );
}
