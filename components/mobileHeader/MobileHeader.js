import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { HiMenuAlt3, HiX } from "react-icons/hi";
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
    outline: 0,
    boxShadow: theme.shadows[5],
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
                    Hårfjerning
                  </div>
                </Link>
                <div
                  className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                  // onClick={() => setOpenModal(false)}
                >
                  Microblading
                </div>
                <div
                  className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                  // onClick={() => setOpenModal(false)}
                >
                  Vipper & Bryn
                </div>
                <Link href="/pricelist">
                  <div
                    className="uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Prisliste
                  </div>
                </Link>
                <Link href="/shop">
                  <div
                    className="hidden uppercase poppins text-xl border-b border-gray-200 w-full pb-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Shop
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
          <HiMenuAlt3 />
        </div>
      </div>
    </div>
  );
}
