import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownGifts() {
  return (
    <div className="group opacity-70 hover:opacity-100 inline-block">
      <button className="flex items-center">
        <span className="poppins flex-1 pr-1 uppercase">Gaver</span>
        <span className="group-hover:-rotate-180 transition duration-150 ease-in-out transform">
          <FiChevronDown />
        </span>
      </button>
      <ul className="rounded-b-md group-hover:scale-100 min-w-32 poppins absolute transition duration-150 ease-in-out origin-top transform scale-0 bg-white border cursor-pointer">
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-3 py-1">
          <Link href="/giftcard">Gavekort</Link>
        </li>
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-3 py-1">
          <Link href="/season-ticket">Klippekort</Link>
        </li>
      </ul>
    </div>
  );
}
