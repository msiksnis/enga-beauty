import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownGifts() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button className="flex items-center">
        <span className="pr-1 flex-1 uppercase poppins">Gaver</span>
        <span className="transform group-hover:-rotate-180 transition duration-150 ease-in-out">
          <FiChevronDown />
        </span>
      </button>
      <ul
        className="bg-white border rounded-b-md transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 cursor-pointer poppins"
      >
        <li className="px-3 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/giftcard">Gavekort</Link>
        </li>
        <li className="px-3 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
          <Link href="/season-ticket">Klippekort</Link>
        </li>
      </ul>
    </div>
  );
}
