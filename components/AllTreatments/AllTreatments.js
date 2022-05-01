import Image from "next/image";
import Link from "next/link";

export default function AllTreatments({ image }) {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-center md:my-28">
      <div className="my-10 flex flex-col items-center justify-center text-gray-700 md:mb-14 md:mt-0">
        <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
          Se våre behandlinger
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 lg:gap-10 lg:px-20 xl:px-40">
        <Link href="/behandlinger-priser/fotpleie">
          <div className="flex h-auto w-full cursor-pointer rounded-md bg-[#fcfcfc] shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:h-64 xl:w-64">
            <Image
              className="object-contain opacity-90"
              src="/images/icons/footcare.svg"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/behandlinger-priser/handpleie">
          <div className="flex h-auto w-full cursor-pointer rounded-md bg-[#fcfcfc] shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:h-64 xl:w-64">
            <Image
              className="object-contain"
              src="/images/icons/polish.svg"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/behandlinger-priser/vipper-bryn">
          <div className="flex h-auto w-full cursor-pointer rounded-md bg-[#fcfcfc] shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:h-64 xl:w-64">
            <Image
              className="object-contain opacity-80"
              src="/images/icons/brows.svg"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <Link href="/behandlinger-priser/harfjerning">
          <div className="flex h-auto w-full cursor-pointer rounded-md bg-[#fcfcfc] shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg xl:h-64 xl:w-64">
            <Image
              className="object-contain"
              src="/images/icons/hair-remove.svg"
              width={300}
              height={300}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
