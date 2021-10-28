import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";

export default function HeaderFixed() {
  const [headerSize, setHeaderSize] = useState(false);

  const switchHeader = () => {
    if (window.scrollY >= 80) {
      setHeaderSize(true);
    } else {
      setHeaderSize(false);
    }
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
        <div className="flex justify-center items-end w-full cursor-pointer">
          <Link href="/">
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={400}
              height={100}
            />
          </Link>
          <div className=""></div>
        </div>
      </div>
      <div
        id="2"
        className={
          headerSize
            ? "hidden"
            : "fixed w-full z-10 top-0 mt-24 bg-white shadow-md pb-4"
        }
      >
        <div className="flex h-14 justify-between px-20 items-end pb-2 w-full">
          <div className="space-x-6 poppins opacity-70">
            <span className="cursor-pointer hover:opacity-100 uppercase">
              <Link href="/spa-manicure-pedicure">SPA manikyr og pedikyr</Link>
            </span>
            {/*<span className="cursor-pointer hover:opacity-100 uppercase">
            Kunstnegler
    </span>*/}
            <span className="cursor-pointer hover:opacity-100 uppercase">
              <Link href="/paraffin">Parafinbehandlinger</Link>
            </span>
            <span className="cursor-pointer hover:opacity-100 uppercase">
              <Link href="/waxing">Voksing</Link>
            </span>
            <span className="cursor-pointer hover:opacity-100 uppercase">
              <Link href="/pricelist">Prisliste</Link>
            </span>
            <span className="cursor-pointer hover:opacity-100 uppercase">
              <Link href="/season-ticket">Klippekort</Link>
            </span>
            <span className="cursor-pointer hover:opacity-100 uppercase">
              <Link href="/giftcard">Gavekort</Link>
            </span>
            {/*<span className="cursor-pointer hover:opacity-100 uppercase">Kjøp</span>*/}
          </div>
          <div className="flex items-center">
            {/*<span className="text-xs poppins opacity-70 mr-6 cursor-pointer hover:opacity-100">
              SIGN IN
            </span>
            <div className="mr-6 opacity-70 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
            </div>*/}
            <button
              className="text-xs poppins border border-black px-6 py-1 rounded text-white
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
      <div
        id="3"
        className={headerSize ? "fixed w-full z-10 top-0 bg-white" : "hidden"}
      >
        <div className="flex h-11 justify-between px-4 items-end pb-2 w-full shadow-md">
          <div className="flex items-center">
            <div className="pr-20 -mb-2 cursor-pointer">
              <Link href="/">
                <Image
                  className="object-contain"
                  src="/LOGO-ONE.png"
                  width={130}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex justify-start space-x-6 poppins opacity-70 text-sm mt-2">
              <span className="cursor-pointer hover:opacity-100 uppercase">
                <Link href="/spa-manicure-pedicure">
                  SPA manikyr og pedikyr
                </Link>
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                <Link href="/pricelist">Prisliste</Link>
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                <Link href="/season-ticket">Klippekort</Link>
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                <Link href="/giftcard">Gavekort</Link>
              </span>
              {/*<span className="cursor-pointer hover:opacity-100 uppercase">
                Kjøp
        </span>*/}
            </div>
          </div>
          <div className="flex items-center justify-end">
            {/*<span className="text-xs poppins opacity-70 mr-6 cursor-pointer hover:opacity-100">
              SIGN IN
            </span>
            <div className="mr-6 opacity-70 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
    </div>*/}
            <button
              className="text-xs poppins border border-black px-6 py-1 rounded text-white
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
