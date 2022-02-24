import { FiChevronDown } from "react-icons/fi";

export default function Dropdown() {
  return (
    <div className="group opacity-70 hover:opacity-100 inline-block">
      <button className="flex items-center">
        <span className="flex-1 pr-1 uppercase">Behandlinger</span>
        <span className="group-hover:-rotate-180 transition duration-150 ease-in-out transform">
          <FiChevronDown />
        </span>
      </button>
      <ul className="rounded-b-md group-hover:scale-100 min-w-32 absolute transition duration-150 ease-in-out origin-top transform scale-0 bg-white border cursor-pointer">
        <li className="hover:bg-gray-100 px-3 py-1">Programming</li>
        <li className="hover:bg-gray-100 px-3 py-1">DevOps</li>
        <li className="hover:bg-gray-100 px-3 py-1">Testing</li>
        <li className="hover:bg-gray-100 px-3 py-1">Programming</li>
        <li className="hover:bg-gray-100 px-3 py-1">DevOps</li>
        <li className="hover:bg-gray-100 px-3 py-1">Testing</li>
      </ul>
    </div>
  );
}
