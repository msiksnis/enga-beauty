import Image from "next/image";

export default function Gavekort({ giftcards }) {
  return (
    <div className="mt-28 flex justify-center pb-40 md:mt-48 lg:px-20 xl:px-40">
      <div className="">
        <div className="mx-auto grid grid-cols-2 gap-1 pb-10 md:grid-cols-3">
          {giftcards.map((giftcard) => (
            <div
              key={giftcard._id}
              className="flex justify-center border lg:mx-2"
            >
              <Image
                className="object-cover"
                src={giftcard.imageUrl}
                width={450}
                height={300}
              />
            </div>
          ))}
        </div>
        <div className=" px-4">
          <h2 className="font-poppins flex justify-center pb-10 text-center text-lg font-light text-gray-700 lg:pt-6 lg:text-xl">
            Velg og kjøp favorit behandlingen din med gavekort. Vi sender
            digitalt til din e-post. Ring hos oss på 45 84 50 04 eller send en
            mail til post@atelierbeaute.no for å booke gavekort timen din.
          </h2>
          <h2 className="font-poppins flex justify-center px-10 pt-6 text-center font-extralight text-gray-700 lg:mt-0 lg:pt-10 lg:text-lg">
            Gavekortet har 6 måneder gyldighet og du kan velge ønsket beløp for
            gavekortet i salongen vår.
          </h2>
        </div>
      </div>
    </div>
  );
}
