import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownMobilePrice() {
  return (
    <div className="group opacity-70 hover:opacity-100 inline-block">
      <button className="flex items-center">
        <span className="poppins flex-1 pr-1 uppercase">Prisliste</span>
        <span className="group-hover:-rotate-180 transition duration-150 ease-in-out transform">
          <FiChevronDown />
        </span>
      </button>
      <ul className="rounded-b-md group-hover:scale-100 min-w-32 poppins absolute transition duration-150 ease-in-out origin-top transform scale-0 bg-white border cursor-pointer">
        <p className="py-1 pl-2 border-b">Priser på:</p>
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-5 py-1">
          <Link href="/priser/fotpleie">Fotpleie</Link>
        </li>
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-5 py-1">
          <Link href="/priser/handpleie">Håndpleie</Link>
        </li>
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-5 py-1">
          <Link href="/priser/harfjerning">Hårfjerning</Link>
        </li>
        {/* 
          <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-5 py-1">
            Spa med parafin
          </li>
         */}
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-5 py-1">
          <Link href="/priser/microblading">Microblading</Link>
        </li>
        <li className="hover:bg-gray-100 opacity-70 hover:opacity-100 px-5 py-1">
          <Link href="/priser/vipper-og-bryn">Vipper & Bryn</Link>
        </li>
      </ul>
    </div>
  );
}
