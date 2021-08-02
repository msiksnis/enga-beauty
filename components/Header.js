import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import BookNow from "./buttons/BookNow";

export default function Header({ children }) {
  const router = useRouter();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

  return (
    <div id="top">
      <header className="flex justify-between h-auto pl-6 pr-4 md:px-10 lg:px-20 items-center mt-6 lg:mt-10 sticky z-30">
        <div className="hidden lg:inline cursor-pointer">
          <Link href="/">
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={300}
              height={70}
            />
          </Link>
        </div>
        <div className="lg:hidden cursor-pointer">
          <Link href="/">
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={200}
              height={45}
            />
          </Link>
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
              ? "absolute lg:relative items-center bg-white flex flex-col h-screen w-full top-14 left-0 text-2xl montserrat pt-28"
              : "hidden lg:flex absolute lg:relative montserrat font-normal space-x-10 text-lg mt-5"
          }
        >
          <span className="relative dropdown cursor-pointer opacity-70 hover:opacity-100 py-3">
            <span>Behandlinger</span>
            <div className="dropdown-content border border-gray-00 rounded -ml-14 lg:-ml-20">
              <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/spa-manicure-pedicure">
                  SPA manikyr og pedikyr
                </Link>
              </span>
              <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
            </div>
          </span>
          <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link href="/pricelist">Prisliste</Link>
          </span>
          <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 mb-6 lg:mb-0 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link href="/season-ticket">Klippekort</Link>
          </span>
          <BookNow />
        </nav>
      </header>
      {children}
    </div>
  );
}

// <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
//   <Link href="/">Kontakt</Link>
// </span>
