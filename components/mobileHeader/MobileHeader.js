import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

function getModalStyle() {
  //   const top = 50;
  //   const left = 50;
  //   return {
  //     top: `${top}%`,
  //     left: `${left}%`,
  //     transform: `translate(-${top}%, -${left}%)`,
  //   };
}
const width = 100;
const height = 100;
// const filter = "blur(1rem)";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: `${width}vw`,
    height: `${height}vh`,
    backgroundColor: "#fff",
    // opacity: 0.96,
    // backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    outline: 0,
    // backdropFilter: `${filter}`,
    // borderRadius: 10,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    // overflow: "scroll",
  },
}));

export default function MobileHeader() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex fixed top-0 left-0 w-full z-20 bg-white pb-2 shadow">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <div className="h-screen">
            <div className="flex flex-col items-center w-full pt-2 shadow px-4 pb-2">
              <div className="flex justify-between w-full items-center">
                <Link href="/">
                  <Image
                    className="object-contain"
                    src="/LOGO-ONE.png"
                    width={200}
                    height={45}
                  />
                </Link>
                <div
                  className="text-3xl opacity-90"
                  onClick={() => setOpenModal(false)}
                >
                  <HiX />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-3/4 justify-between">
              <div className="mt-14 mx-4 space-y-3">
                <Link href="/spa-manicure-pedicure">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    SPA manikyr og pedikyr
                  </div>
                </Link>
                {/*<div className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2">
                  <Link href="/spa-manicure-pedicure">Kunstnegler</Link>
                </div>*/}
                <Link href="/paraffin">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Parafinbehandlinger
                  </div>
                </Link>
                <Link href="/waxing">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Voksing
                  </div>
                </Link>
                <Link href="/pricelist">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Prisliste
                  </div>
                </Link>
                <Link href="/season-ticket">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Klippekort
                  </div>
                </Link>
                <Link href="/giftcard">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Gavekort
                  </div>
                </Link>
                <div className="flex justify-center pt-10">
                  <button className="border border-black/90 w-56 lg:w-52 bg-black/90 text-white text-lg hover:bg-white hover:text-black/90 rounded shadow-lg py-2">
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
              <div className="flex flex-col items-center">
                <p className="text-xs opacity-70">Let's talk</p>
                <a
                  href="mailto:info@engabeauty.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-70 hover:"
                >
                  info@engabeauty.no
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="flex justify-between items-center w-full mt-2 px-4">
        <Link href="/">
          <Image
            className="object-contain"
            src="/LOGO-ONE.png"
            width={200}
            height={45}
          />
        </Link>
        <div className="text-3xl opacity-90" onClick={() => setOpenModal(true)}>
          <HiMenu />
        </div>
      </div>
    </div>
  );
}

// <h1 className="flex text-2xl font-thin  lora opacity-90">
//                   <Link href="/">ENGA BEAUTY</Link>
//                 </h1>

// <div className="flex flex-col text-2xl items-center mt-20">
//                 <span className="relative dropdown cursor-pointer opacity-70 hover:opacity-100 py-3">
//                   <span>Behandlinger</span>
//                   <div className="dropdown-content ml-[-60px] py-3 bg-white z-10 rounded-xl">
//                     <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
//                       <Link href="/spa-manicure-pedicure">
//                         SPA manikyr og pedikyr
//                       </Link>
//                     </span>
//                     <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
//                       <Link href="/waxing">Voksing</Link>
//                     </span>
//                     <span className="cursor-pointer opacity-70 hover:opacity-100 text-xl lg:text-lg py-1 transform hover:scale-105 transition duration-300 ease-in-out">
//                       <Link href="/paraffin">Parafinbehandlinger</Link>
//                     </span>
//                   </div>
//                 </span>
//                 <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
//                   <Link href="/pricelist">Prisliste</Link>
//                 </span>
//                 <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
//                   <Link href="/season-ticket">Klippekort</Link>
//                 </span>
//                 <div className="mt-5">
//                   <BookNow />
//                 </div>
//               </div>
