import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

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

export default function TestModal() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center h-[500px] w-full">
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <span
            className="text-3xl text-yellow-500"
            onClick={() => setOpenModal(false)}
          >
            X
          </span>
        </div>
      </Modal>
      <span
        className="text-2xl text-red-500"
        onClick={() => setOpenModal(true)}
      >
        Open
      </span>
    </div>
  );
}
