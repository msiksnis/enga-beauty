import Link from "next/link";
import Image from "next/image";
import DropdownTreatments from "./Dropdowns/DropdownTreatments";
import DropdownGifts from "./Dropdowns/DropdownGifts";

export default function SmallHeader() {
  return (
    <div className="flex w-full items-center justify-between px-4 pt-2 pb-3 shadow-md">
      <div className="-mb-3 flex w-40 cursor-pointer items-center justify-start lg:w-52">
        <Link href="/">
          <a>
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={180}
              height={44}
            />
          </a>
        </Link>
      </div>

      <div className="font-poppins mt-3.5 flex justify-center space-x-3 lg:space-x-5">
        <DropdownTreatments />
        <DropdownGifts />
        <span className="cursor-pointer  uppercase opacity-70 hover:opacity-100">
          <a
            href="mailto:info@engabeauty.no"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-3 lg:pb-1"
          >
            KONTAKT OSS
          </a>
        </span>
      </div>

      <div className="-mb-2 flex w-48 justify-end lg:w-52">
        <button
          className="font-poppins hover:(text-black bg-white) rounded border border-black bg-black px-9 py-2 text-xs
          uppercase text-white transition duration-300 ease-in-out lg:text-sm"
        >
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Time
          </a>
        </button>
      </div>
    </div>
  );
}
