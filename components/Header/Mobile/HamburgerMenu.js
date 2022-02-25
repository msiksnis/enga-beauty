import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import NavMenu from "./NavMenu";
import { useLocalState } from "../../../contexts/LocalState";

const menuVariants = {
  open: {
    transform: "translateX(0)",
  },
  closed: {
    transform: "translateX(100%)",
  },
};

const menuTransition = {
  duration: 0.2,
  stiffness: 100,
  delay: 0.1,
};

export default function HamburgerMenu() {
  const { isOpen, toggleMenu } = useLocalState();

  return (
    <>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <motion.div
        className="fixed inset-0 z-50 mt-14 h-screen w-full select-none bg-white py-2 px-4"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <NavMenu toggle={toggleMenu} isOpen={isOpen} />
      </motion.div>
    </>
  );
}
