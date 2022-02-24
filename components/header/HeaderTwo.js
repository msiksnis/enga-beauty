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
          <div className="flex items-end justify-center w-full">
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={400}
              height={100}
            />
            <div className=""></div>
          </div>
          <div className="h-14 flex items-end justify-between w-full px-20 pb-2">
            <div className="poppins opacity-70 space-x-6">
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Behandlinger
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Prisliste
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Klippekort
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Gavekort
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Kjøp
              </span>
            </div>
            <div className="flex items-center">
              <span className="poppins opacity-70 hover:opacity-100 mr-6 text-xs cursor-pointer">
                SIGN IN
              </span>
              <div className="opacity-70 mr-6 text-xl cursor-pointer">
                <HiOutlineShoppingBag />
              </div>
              <button className="poppins hover:text-black hover:bg-white px-6 py-1 text-xs text-white bg-black border border-black rounded">
                Bestill Time
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={headerSize ? "fixed w-full z-10 top-0 bg-white" : "hidden"}
      >
        <div className="h-11 flex items-end justify-between w-full px-4 pb-2 shadow-md">
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
            <div className="poppins opacity-70 flex justify-start mt-2 space-x-6 text-sm">
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Behandlinger
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Prisliste
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Klippekort
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Gavekort
              </span>
              <span className="hover:opacity-100 uppercase cursor-pointer">
                Kjøp
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end w-1/3">
            <span className="poppins opacity-70 hover:opacity-100 mr-6 text-xs cursor-pointer">
              SIGN IN
            </span>
            <div className="opacity-70 mr-6 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
            </div>
            <button className="poppins hover:text-black hover:bg-white px-6 py-1 text-xs text-white bg-black border border-black rounded">
              Bestill Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
    </div>
  );
}

// <h1 className="text-[2.5rem] font-thin tracking-[0.07e ] lora opacity-90">
//               <Link href="/ >ENGA BEAUTY</Link>
