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
        <div className="flex items-end justify-center w-full cursor-pointer">
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
        <div className="h-14 flex items-end justify-between w-full px-20 pb-2">
          <div className="poppins opacity-70 space-x-6">
            <span className="hover:opacity-100 uppercase cursor-pointer">
              <Link href="/spa-manicure-pedicure">SPA manikyr og pedikyr</Link>
            </span>
            {/*<span className="hover:opacity-100 uppercase cursor-pointer">
            Kunstnegler
    </span>*/}
            <span className="hover:opacity-100 uppercase cursor-pointer">
              <Link href="/paraffin">Parafinbehandlinger</Link>
            </span>
            <span className="hover:opacity-100 uppercase cursor-pointer">
              <Link href="/waxing">Voksing</Link>
            </span>
            <span className="hover:opacity-100 uppercase cursor-pointer">
              <Link href="/pricelist">Prisliste</Link>
            </span>
            <span className="hover:opacity-100 uppercase cursor-pointer">
              <Link href="/season-ticket">Klippekort</Link>
            </span>
            <span className="hover:opacity-100 uppercase cursor-pointer">
              <Link href="/giftcard">Gavekort</Link>
            </span>
            {/*<span className="hover:opacity-100 uppercase cursor-pointer">Kjøp</span>*/}
          </div>
          <div className="flex items-center">
            {/*<span className="poppins opacity-70 hover:opacity-100 mr-6 text-xs cursor-pointer">
              SIGN IN
            </span>
            <div className="opacity-70 mr-6 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
            </div>*/}
            <button className="poppins hover:text-black hover:bg-white px-6 py-1 text-xs text-white bg-black border border-black rounded">
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
        <div className="h-11 flex items-end justify-between w-full px-4 pb-2 shadow-md">
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
            <div className="poppins opacity-70 flex justify-start mt-2 space-x-6 text-sm">
              <span className="hover:opacity-100 uppercase cursor-pointer">
                <Link href="/spa-manicure-pedicure">
                  SPA manikyr og pedikyr
                </Link>
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                <Link href="/pricelist">Prisliste</Link>
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                <Link href="/season-ticket">Klippekort</Link>
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                <Link href="/giftcard">Gavekort</Link>
              </span>
              {/*<span className="hover:opacity-100 uppercase cursor-pointer">
                Kjøp
        </span>*/}
            </div>
          </div>
          <div className="flex items-center justify-end">
            {/*<span className="poppins opacity-70 hover:opacity-100 mr-6 text-xs cursor-pointer">
              SIGN IN
            </span>
            <div className="opacity-70 mr-6 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
    </div>*/}
            <button className="poppins hover:text-black hover:bg-white px-6 py-1 text-xs text-white bg-black border border-black rounded">
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
