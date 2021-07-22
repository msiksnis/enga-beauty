import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import BookNow from "../buttons/BookNow";
import { BiChevronDown } from "react-icons/bi";
import BurgerHamber from "./BurgerHamber";

export default function Header() {
  const router = useRouter();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

  return (
    <div className="flex items-center lg:mx-20 lg:mt-10 sticky z-30 border-b mb-10 pb-6">
      <button className="flex lg:hidden focus:outline-none">
        {click === false && (
          <MenuIcon className="h-8 opacity-75 " onClick={handleClick} />
        )}
        {click === true && (
          <XIcon className="h-8 opacity-75" onClick={handleClick} />
        )}
      </button>
      <div className="flex justify-start w-1/3">
        <nav
          className={
            click
              ? ""
              : "hidden lg:flex lg:relative montserrat font-normal space-x-5 text-lg mt-5"
          }
        >
          <span className="relative dropdown cursor-pointer opacity-70 hover:opacity-100 py-3">
            <span>Behandlinger</span>
            <div className="dropdown-content border border-gray-200 rounded -ml-14 lg:-ml-0 text-xl lg:text-lg">
              <span className="cursor-pointer opacity-70 hover:opacity-100 py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/spa-manicure-pedicure">
                  SPA manikyr og pedikyr
                </Link>
              </span>
              <span className="cursor-pointer opacity-70 hover:opacity-100 py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="cursor-pointer opacity-70 hover:opacity-100 py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
            </div>
          </span>
          <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link href="/pricelist">Prisliste</Link>
          </span>
          <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link href="/season-ticket">Klippekort</Link>
          </span>
        </nav>
      </div>
      <div className="flex  justify-center  w-1/3">
        <h1 className="hidden lg:flex text-3xl lg:text-5xl font-thin tracking-[0.1em] lora opacity-90">
          <Link href="/">ENGA BEAUTY</Link>
        </h1>
      </div>
      <div className="flex items-center justify-end w-1/3">
        <span className="flex items-center cursor-pointer opacity-70 hover:opacity-100 mr-6 text-lg font-normal mt-5">
          EN
          <div className="ml-1 text-2xl">
            <BiChevronDown />
          </div>
        </span>
        <BookNow />
      </div>
    </div>
  );
}
