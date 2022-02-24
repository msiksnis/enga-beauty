import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

function getSubmenuStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const width = 300;
const height = 300;
const filter = "blur(2rem)";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: `${width}px`,
    height: `${height}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "-50px",
    backgroundColor: "#fff",
    // opacity: 0.76 ,
    // backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    outline: 0,
    backdropFilter: `${filter}`,
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    // overflow: "scroll",
  },
}));

export default function Submenu() {
  const classes = useStyles();
  const [submenuStyle] = useState(getSubmenuStyle);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  return (
    <div className="flex">
      <Modal open={openSubmenu} onClose={() => setOpenSubmenu(false)}>
        <div style={submenuStyle} className={classes.paper}>
          <div className="opacity-70 hover:opacity-100 flex flex-col items-center justify-center h-full text-xl">
            <div className="hover:scale-105 py-2 transition duration-300 ease-in-out transform">
              <Link href="/spa-manicure-pedicure">SPA manikyr og pedikyr</Link>
            </div>
            <div className="hover:scale-105 py-2 transition duration-300 ease-in-out transform">
              <Link href="/waxing">Voksing</Link>
            </div>
            <div className="hover:scale-105 py-2 transition duration-300 ease-in-out transform">
              <Link href="/paraffin">Parafinbehandlinger</Link>
            </div>
          </div>
        </div>
      </Modal>
      <span className="opacity-70 hover:opacity-100 hover:scale-105 py-3 transition duration-300 ease-in-out transform cursor-pointer">
        <div className="" onClick={() => setOpenSubmenu(true)}>
          Behandlinger
        </div>
      </span>
    </div>
  );
}
