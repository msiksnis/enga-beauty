import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import BookNow from "../buttons/BookNow";

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
    <div className="flex">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <div className="h-screen">
            <div className="flex justify-between items-center w-full pt-4 px-4">
              <h1 className="flex text-3xl font-thin tracking-[0.10em] lora opacity-90">
                <Link href="/">ENGA BEAUTY</Link>
              </h1>
              <div
                className="text-3xl opacity-90"
                onClick={() => setOpenModal(false)}
              >
                <HiX />
              </div>
            </div>
            <div className="flex flex-col h-3/4 justify-between">
              <div className="flex flex-col text-2xl items-center mt-20">
                <span className="relative dropdown cursor-pointer opacity-70 hover:opacity-100 py-3">
                  <span>Behandlinger</span>
                  <div className="dropdown-content ml-[-60px] py-3 bg-white z-10 rounded-xl">
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
                <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
                  <Link href="/season-ticket">Klippekort</Link>
                </span>
                <div className="mt-5">
                  <BookNow />
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
      <div className="flex justify-between items-center w-full mt-4 px-4">
        <h1 className="flex text-3xl font-thin tracking-[0.10em] lora opacity-90">
          <Link href="/">ENGA BEAUTY</Link>
        </h1>
        <div className="text-3xl opacity-90" onClick={() => setOpenModal(true)}>
          <HiMenu />
        </div>
      </div>
    </div>
  );
}
