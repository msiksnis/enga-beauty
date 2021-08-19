import { useEffect, useState } from "react";
import Link from "next/link";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import Image from "next/image";

export default function HeaderFixed() {
  const [headerSize, setHeaderSize] = useState(false);

  const switchHeader = () => {
    if (window.scrollY >= 80) {
      setHeaderSize(true);
    } else {
      setHeaderSize(false);
    }
    console.log(switchHeader);
  };

  useEffect(() => {
    window.addEventListener("scroll", switchHeader);
    return () => window.removeEventListener("scroll", switchHeader);
  }, [switchHeader]);
  return (
    <header id="top">
      <div
        id="1"
        className={
          headerSize ? "hidden" : "flex w-full fixed top-0 bg-white z-50"
        }
      >
        <div className="flex justify-between items-center w-full cursor-pointer border-b border-gray-200">
          <div className="flex space-x-4 text-xl ml-10 w-44">
            <div className="opacity-70 hover:opacity-100 hover:scale-110">
              <a
                href="https://www.instagram.com/enga_beauty_ba10/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <FiInstagram />
              </a>
            </div>
            <div className="opacity-70 hover:opacity-100 hover:scale-110">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <FiFacebook />
              </a>
            </div>
          </div>
          <div className="-mb-1">
            <Link href="/">
              <Image
                className="object-contain"
                src="/LOGO-ONE.png"
                width={280}
                height={80}
              />
            </Link>
          </div>
          <div className="flex justify-end mr-10 w-44">
            <button
              className="text-md uppercase poppins border border-black px-10 py-2 rounded text-black
          bg-white hover:text-white hover:bg-black"
            >
              <a
                href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bestill time
              </a>
            </button>
          </div>
        </div>
      </div>
      <div
        id="2"
        className={
          headerSize
            ? "hidden"
            : "fixed w-full z-10 top-0 mt-20 bg-white shadow-md"
        }
      >
        <div className="flex h-12 pt-2 justify-center items-center w-full">
          <div className="space-x-6 poppins">
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/spa-manicure-pedicure">SPA manikyr og pedikyr</Link>
            </span>
            {/*<span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
            Kunstnegler
    </span>*/}
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/paraffin">Parafinbehandlinger</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/waxing">Voksing</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/pricelist">Prisliste</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/season-ticket">Klippekort</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/giftcard">Gavekort</Link>
            </span>
            {/*<span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">Kjøp</span>*/}
          </div>
          <div className="flex items-center">
            {/*<span className="text-xs poppins opacity-70 mr-6 cursor-pointer hover:opacity-100">
              SIGN IN
            </span>
            <div className="mr-6 opacity-70 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
            </div>*/}
          </div>
        </div>
      </div>
      <div
        id="3"
        className={headerSize ? "fixed w-full z-10 top-0 bg-white" : "hidden"}
      >
        <div className="flex h-14 justify-between px-4 items-center pb-2 w-full shadow-md">
          <div className="-mb-3 cursor-pointer w-52">
            <Link href="/">
              <Image
                className="object-contain"
                src="/LOGO-ONE.png"
                width={180}
                height={44}
              />
            </Link>
          </div>
          <div className="flex space-x-5 poppins text-sm mt-2">
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/spa-manicure-pedicure">SPA manikyr og pedikyr</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/paraffin">Parafinbehandlinger</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/waxing">Voksing</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/pricelist">Prisliste</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/season-ticket">Klippekort</Link>
            </span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
              <Link href="/giftcard">Gavekort</Link>
            </span>
            {/*<span className="cursor-pointer opacity-70 hover:opacity-100 uppercase">
                Kjøp
        </span>*/}
          </div>
          <div className="flex justify-end w-52 -mb-2">
            {/*<span className="text-xs poppins opacity-70 mr-6 cursor-pointer hover:opacity-100">
              SIGN IN
            </span>
            <div className="mr-6 opacity-70 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
    </div>*/}
            <button
              className="text-sm uppercase poppins border border-black px-9 py-2 rounded text-white
          bg-black hover:text-black hover:bg-white"
            >
              <a
                href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bestill time
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
