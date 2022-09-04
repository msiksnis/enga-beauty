import { BsStar, BsClockHistory, BsPerson } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <div className="flex h-screen max-w-min flex-col items-center space-y-10 border-r p-5 lg:max-w-xs lg:space-y-20">
      <div>
        <Logo />
      </div>
      <div className="font-poppins space-y-4">
        <div className="group flex cursor-pointer items-center space-x-2">
          <AiOutlineHome className="h-5 w-5 text-gray-900" />
          <div className="hidden transition-all duration-150 ease-out group-hover:scale-105 lg:inline">
            Home
          </div>
        </div>
        <div className="group flex cursor-pointer items-center space-x-2">
          <RiServiceLine className="h-5 w-5 text-gray-900" />
          <div className="hidden transition-all duration-150 ease-out group-hover:scale-105 lg:inline">
            Treatments
          </div>
        </div>
        <div className="group flex cursor-pointer items-center space-x-2">
          <BsStar className="h-5 w-5 text-gray-900" />
          <div className="hidden transition-all duration-150 ease-out group-hover:scale-105 lg:inline">
            Reviews
          </div>
        </div>
        <div className="group flex cursor-pointer items-center space-x-2">
          <BsClockHistory className="h-5 w-5 text-gray-900" />
          <div className="hidden transition-all duration-150 ease-out group-hover:scale-105 lg:inline">
            Openig Hours
          </div>
        </div>
        <div className="group flex cursor-pointer items-center space-x-2">
          <BsPerson className="h-5 w-5 text-gray-900" />
          <div className="hidden transition-all duration-150 ease-out group-hover:scale-105 lg:inline">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
}
