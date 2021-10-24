import { FiChevronDown } from "react-icons/fi";

export default function Dropdown() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button className="flex items-center">
        <span className="pr-1 flex-1 uppercase">Behandlinger</span>
        <span className="transform group-hover:-rotate-180 transition duration-150 ease-in-out">
          <FiChevronDown />
        </span>
      </button>
      <ul
        className="bg-white border rounded-b-md transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 cursor-pointer"
      >
        <li className="px-3 py-1 hover:bg-gray-100">Programming</li>
        <li className="px-3 py-1 hover:bg-gray-100">DevOps</li>
        <li className="px-3 py-1 hover:bg-gray-100">Testing</li>
        <li className="px-3 py-1 hover:bg-gray-100">Programming</li>
        <li className="px-3 py-1 hover:bg-gray-100">DevOps</li>
        <li className="px-3 py-1 hover:bg-gray-100">Testing</li>
      </ul>
    </div>
  );
}
