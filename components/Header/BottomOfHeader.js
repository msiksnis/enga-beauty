import Link from "next/link";
// import styled from "styled-components";
import DropdownTreatments from "./Dropdowns/DropdownTreatments";
import DropdownGifts from "./Dropdowns/DropdownGifts";

export default function BottomOfHeader() {
  return (
    <div className="font-poppins flex h-12 w-full items-center justify-center px-8 pt-2 text-sm md:px-10 lg:text-base">
      <div className="mt-0.5 space-x-10">
        <DropdownTreatments />
        <DropdownGifts />
        <span className="cursor-pointer uppercase opacity-70 hover:opacity-100">
          {/* <a
            href="mailto:info@engabeauty.no"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-3 lg:pb-1"
          >
            KONTAKT OSS
          </a> */}
          <Link href="/contact">
            <span>KONTAKT OSS</span>
          </Link>
        </span>
      </div>
    </div>
  );
}
