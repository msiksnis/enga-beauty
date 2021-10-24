import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownPrice() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button className="flex items-center">
        <span className="pr-1 flex-1 uppercase poppins">Prisliste</span>
        <span className="transform group-hover:-rotate-180 transition duration-150 ease-in-out">
          <FiChevronDown />
        </span>
      </button>
      <ul
        className="bg-white border rounded-b-md transform scale-0 group-hover:scale-100 absolute 
      transition duration-150 ease-in-out origin-top min-w-32 cursor-pointer poppins"
      >
        <p className="pl-2 py-1 border-b">Priser på:</p>
        <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/priser/fotpleie">Fotpleie</Link>
        </li>
        <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/priser/handpleie">Håndpleie</Link>
        </li>
        <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/priser/harfjerning">Hårfjerning</Link>
        </li>
        {/* 
          <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Spa med parafin
          </li>
         */}
        <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/priser/microblading">Microblading</Link>
        </li>
        <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/priser/vipper-og-bryn">Vipper & Bryn</Link>
        </li>
      </ul>
    </div>
  );
}
