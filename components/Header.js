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
      <header className="md:px-10 lg:px-20 lg:mt-10 sticky z-30 flex items-center justify-between h-auto pl-6 pr-4 mt-6">
        <div className="lg:inline hidden cursor-pointer">
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
        <button className="lg:hidden focus:outline-none inline-block">
          {click === false && (
            <MenuIcon className=" h-8 opacity-75" onClick={handleClick} />
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
          <span className="dropdown opacity-70 hover:opacity-100 relative py-3 cursor-pointer">
            <span>Behandlinger</span>
            <div className="dropdown-content border-gray-00 -ml-14 lg:-ml-20 border rounded">
              <span className="opacity-70 hover:opacity-100 lg:text-lg hover:scale-105 py-1 text-xl transition duration-300 ease-in-out transform cursor-pointer">
                <Link href="/spa-manicure-pedicure">
                  SPA manikyr og pedikyr
                </Link>
              </span>
              <span className="opacity-70 hover:opacity-100 lg:text-lg hover:scale-105 py-1 text-xl transition duration-300 ease-in-out transform cursor-pointer">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 lg:text-lg hover:scale-105 py-1 text-xl transition duration-300 ease-in-out transform cursor-pointer">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
            </div>
          </span>
          <span className="opacity-70 hover:opacity-100 hover:scale-105 py-3 transition duration-300 ease-in-out transform cursor-pointer">
            <Link href="/pricelist">Prisliste</Link>
          </span>
          <span className="opacity-70 hover:opacity-100 lg:mb-0 hover:scale-105 py-3 mb-6 transition duration-300 ease-in-out transform cursor-pointer">
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
