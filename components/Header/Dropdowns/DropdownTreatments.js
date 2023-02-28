import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownTreatments() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button className="flex items-center">
        <span className="pr-1 pb-0.5 uppercase">
          <Link href="/behandlinger-priser/vare-behandlinger">
            BEHANDLINGER & PRISER
          </Link>
        </span>
        <span className="mb-0.5 transform transition duration-150 ease-in-out group-hover:-rotate-180">
          <FiChevronDown />
        </span>
      </button>
      <ul className="font-poppins absolute origin-top scale-0 transform cursor-pointer rounded-b-md border bg-white pb-2 tracking-wide transition duration-300 ease-in-out group-hover:scale-100">
        <Link href="/behandlinger-priser/fotpleie">
          <li className="py-1 pl-6 pr-16 opacity-70 hover:bg-gray-100 hover:opacity-100">
            Fotpleie
          </li>
        </Link>
        <Link href="/behandlinger-priser/handpleie">
          <li className="py-1 pl-6 pr-16 opacity-70 hover:bg-gray-100 hover:opacity-100">
            Håndpleie
          </li>
        </Link>
        <Link href="/behandlinger-priser/harfjerning">
          <li className="hidden py-1 pl-6 pr-16 opacity-70 hover:bg-gray-100 hover:opacity-100">
            Hårfjerning
          </li>
        </Link>
        <Link href="/behandlinger-priser/hudpleie">
          <li className="py-1 pl-6 pr-16 opacity-70 hover:bg-gray-100 hover:opacity-100">
            Hudpleie
          </li>
        </Link>
        <Link href="/behandlinger-priser/vipper-bryn">
          <li className="py-1 pl-6 pr-16 opacity-70 hover:bg-gray-100 hover:opacity-100">
            Vipper & Bryn
          </li>
        </Link>
      </ul>
    </div>
  );
}
