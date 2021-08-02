import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";

export default function HeaderTwo() {
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
    <div id="top">
      <div className="">
        <div
          className={
            headerSize
              ? "hidden"
              : "flex flex-col w-full fixed top-0 bg-white z-50"
          }
        >
          <div className="flex justify-center items-end w-full">
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={400}
              height={100}
            />
            <div className=""></div>
          </div>
          <div className="flex h-14 justify-between px-20 items-end pb-2 w-full">
            <div className="space-x-6 poppins opacity-70">
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Behandlinger
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Prisliste
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Klippekort
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Gavekort
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Kjøp
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-xs poppins opacity-70 mr-6 cursor-pointer hover:opacity-100">
                SIGN IN
              </span>
              <div className="mr-6 opacity-70 text-xl cursor-pointer">
                <HiOutlineShoppingBag />
              </div>
              <button
                className="text-xs poppins border border-black px-6 py-1 rounded text-white
          bg-black hover:text-black hover:bg-white"
              >
                Bestill Time
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={headerSize ? "fixed w-full z-10 top-0 bg-white" : "hidden"}
      >
        <div className="flex h-11 justify-between px-4 items-end pb-2 w-full shadow-md">
          <div className="flex items-center w-2/3">
            <div className="pr-20 -mb-2">
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
                Behandlinger
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Prisliste
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Klippekort
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Gavekort
              </span>
              <span className="cursor-pointer hover:opacity-100 uppercase">
                Kjøp
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end w-1/3">
            <span className="text-xs poppins opacity-70 mr-6 cursor-pointer hover:opacity-100">
              SIGN IN
            </span>
            <div className="mr-6 opacity-70 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
            </div>
            <button
              className="text-xs poppins border border-black px-6 py-1 rounded text-white
          bg-black hover:text-black hover:bg-white"
            >
              Bestill Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <h1 className="text-[2.5rem] font-thin tracking-[0.07em] lora opacity-90">
//               <Link href="/">ENGA BEAUTY</Link>
//             </h1>
