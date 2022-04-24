import Image from "next/image";
import Link from "next/link";

export default function AllTreatments({ image }) {
  return (
    <div className="my-32 flex w-full flex-col items-center justify-center">
      <div className="mb-20 flex flex-col items-center justify-center text-gray-700 md:mb-28">
        <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
          Se alle våre behandlinger
        </h1>
        <div className="mt-1 w-9/12 border-b border-gray-500" />
        <p className="font-alexbrush mt-[-78px] text-6xl text-[#F4EEEC] opacity-60 md:mt-[-94px] md:text-7xl">
          Behandlinger
        </p>
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
