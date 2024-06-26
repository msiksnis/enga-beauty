import Link from "next/link";
import DropdownTreatments from "./Dropdowns/DropdownTreatments";

export default function BottomOfHeader() {
  return (
    <div className="font-poppins flex h-12 items-center justify-center pt-2 text-sm lg:text-base">
      <div className="mt-0.5 space-x-10">
        <DropdownTreatments />
        <span className="uppercase opacity-70 hover:opacity-100">
          <Link href="/gavekort">
            <a>GAVEKORT</a>
          </Link>
        </span>
        <span className="uppercase opacity-70 hover:opacity-100">
          <Link href="/klippekort">
            <a>KLIPPEKORT</a>
          </Link>
        </span>
        <span className="uppercase opacity-70 hover:opacity-100">
          <Link href="/contact">
            <a>KONTAKT OSS</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
