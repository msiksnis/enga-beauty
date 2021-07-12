import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

  return (
    <header className="flex justify-between h-auto pl-6 pr-4 lg:px-20 items-center mt-6 lg:mt-10 sticky z-30">
      <div className="cursor-pointer">
        <h1 className="flex text-3xl lg:text-5xl font-bold tracking-widest lora opacity-90">
          <Link href="/">ENGA BEAUTY</Link>
        </h1>
      </div>
      <button className="inline-block lg:hidden focus:outline-none">
        {click === false && (
          <MenuIcon className="h-8 opacity-75 " onClick={handleClick} />
        )}
        {click === true && (
          <XIcon className="h-8 opacity-75" onClick={handleClick} />
        )}
      </button>
      <nav
        className={
          click
            ? " absolute lg:relative items-center bg-white flex flex-col h-screen w-full top-10 left-0 text-2xl montserrat pt-28"
            : "hidden lg:flex absolute lg:relative montserrat font-normal space-x-10 text-lg mt-5"
        }
      >
        <span className="relative dropdown cursor-pointer opacity-70 hover:opacity-100 py-3">
          <span>Behandlinger</span>
          <div className="dropdown-content border border-gray-00 rounded -ml-14 lg:-ml-20">
            <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
              <Link href="/spa-manicure-pedicure">SPA Manikyr og Pedikyr</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
              <Link href="/waxing">Voksing</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
              <Link href="/paraffin">Paraffinbehandlinger</Link>
            </span>
          </div>
        </span>
        <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
          <Link href="/pricelist">Prisliste</Link>
        </span>
        <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
          <Link href="/season-ticket">Klippekort</Link>
        </span>
        <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
          <Link href="/contact">Kontakt</Link>
        </span>
        <button className="border border-black/90 w-36 lg:w-44 bg-black/90 text-white text-lg hover:bg-white hover:text-black/90 rounded shadow-lg py-3">
          <Link href="/bookTime">Bestill time</Link>
        </button>
      </nav>
    </header>
  );
}
