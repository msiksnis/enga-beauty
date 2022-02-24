import { useEffect, useState } from "react";
import Link from "next/link";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import SignIn from "../SignIn";
import Modal from "../Modal";
import DropdownTreatments from "../header/dropdown/DropdownTreatments";
import DropdownPrice from "./dropdown/DropdownPrice";
import DropdownGifts from "./dropdown/DropdownGifts";

export default function NewHeader() {
  const [headerSize, setHeaderSize] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div
        id="1"
        className={
          headerSize ? "hidden" : "flex w-full fixed top-0 bg-white z-20"
        }
      >
        <div className="flex items-center justify-between w-full border-b border-gray-200">
          <div className="w-44 flex ml-10 space-x-4 text-xl">
            <div className="opacity-70 hover:opacity-100 hover:scale-110">
              <a
                href="https://www.instagram.com/enga_beauty_ba10/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 ease-in-out transform"
              >
                <FiInstagram />
              </a>
            </div>
            <div className="opacity-70 hover:opacity-100 hover:scale-110">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-300 ease-in-out transform"
              >
                <FiFacebook />
              </a>
            </div>
          </div>
          <div className="-mb-1 cursor-pointer">
            <Link href="/">
              <Image
                className="object-contain"
                src="/LOGO-ONE.png"
                width={280}
                height={80}
              />
            </Link>
          </div>
          <div className="w-44 flex justify-end mr-10">
            <button className="text-md poppins hover:text-white hover:bg-black px-10 py-2 text-black uppercase transition duration-200 ease-in-out bg-white border border-black rounded">
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
        <div className="flex items-center justify-center w-full h-12 px-10 pt-2">
          <div className="poppins space-x-6">
            <DropdownTreatments />
            <DropdownPrice />

            <span className="opacity-70 hover:opacity-100 hidden uppercase cursor-pointer">
              <Link href="/shop">Shop</Link>
            </span>
            <DropdownGifts />
            <span className="opacity-70 hover:opacity-100 hidden uppercase cursor-pointer">
              <Link href="/">Sjønhettsbloggen</Link>
            </span>
            <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
              <a
                href="mailto:info@engabeauty.no"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:ml-2 lg:pb-1 pb-3"
              >
                Kontakt oss
              </a>
            </span>
            {/*<span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">Kjøp</span>*/}
          </div>

          {/* This is SignIn an Shopping Cart */}
          <div className="hidden justify-between items-center w-[110px]">
            <SignIn setShowModal={setShowModal} />
            <div className="opacity-70 hover:opacity-100 hover:scale-110 flex text-2xl cursor-pointer">
              <HiOutlineShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <div
        id="3"
        className={headerSize ? "fixed w-full z-10 top-0 bg-white" : "hidden"}
      >
        <div className="h-14 flex items-center justify-between w-full px-4 pb-2 shadow-md">
          <div className="w-52 -mb-3 cursor-pointer">
            <Link href="/">
              <Image
                className="object-contain"
                src="/LOGO-ONE.png"
                width={180}
                height={44}
              />
            </Link>
          </div>
          <div className="poppins flex mt-2 space-x-5 text-sm">
            <DropdownTreatments />
            <DropdownPrice />
            <DropdownGifts />
            <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
              <a
                href="mailto:info@engabeauty.no"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:ml-2 lg:pb-1 pb-3"
              >
                Kontakt oss
              </a>
            </span>
            {/* 
              <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                <Link href="/spa-manicure-pedicure">SPA manikyr og pedikyr</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                <Link href="/pricelist">Prisliste</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 hidden uppercase cursor-pointer">
                <Link href="/shop">Shop</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                <Link href="/season-ticket">Klippekort</Link>
              </span>
              <span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                <Link href="/giftcard">Gavekort</Link>
              </span>
            */}
            {/*<span className="opacity-70 hover:opacity-100 uppercase cursor-pointer">
                Kjøp
        </span>*/}
          </div>
          <div className="w-52 flex justify-end -mb-2">
            {/*<span className="poppins opacity-70 hover:opacity-100 mr-6 text-xs cursor-pointer">
              SIGN IN
            </span>
            <div className="opacity-70 mr-6 text-xl cursor-pointer">
              <HiOutlineShoppingBag />
    </div>*/}
            <button className="poppins px-9 hover:text-black hover:bg-white py-2 text-sm text-white uppercase transition duration-200 ease-in-out bg-black border border-black rounded">
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
