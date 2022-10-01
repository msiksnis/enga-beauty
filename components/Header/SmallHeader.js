import Link from "next/link";
import Image from "next/image";
import DropdownTreatments from "./Dropdowns/DropdownTreatments";
import DropdownGifts from "./Dropdowns/DropdownGifts";

export default function SmallHeader() {
  return (
    <div className="flex w-full items-center justify-between px-4 shadow-md">
      <div className="flex w-40 items-center justify-start lg:w-56">
        <Link href="/">
          <a>
            <Image
              className="object-contain"
              src="/logo/main_logo_black.png"
              width={200}
              height={70}
            />
          </a>
        </Link>
      </div>

      <div className="font-poppins mt-3.5 flex justify-center space-x-3 lg:space-x-5">
        <DropdownTreatments />
        <DropdownGifts />
        <span className="uppercase opacity-70 hover:opacity-100">
          <Link href="/contact">
            <a>KONTAKT OSS</a>
          </Link>
        </span>
      </div>

      <div className="flex w-48 justify-end lg:w-52">
        <button
          className="font-poppins rounded border border-gray-900 bg-gray-900 px-9 py-2 text-xs uppercase text-white
          transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 lg:text-sm"
        >
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bestill Time
          </a>
        </button>
      </div>
    </div>
  );
}
