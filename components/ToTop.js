import { useEffect, useState } from "react";
import { VscChevronUp } from "react-icons/vsc";
import { Link } from "react-scroll";

export default function ToTop() {
  const [toTop, setToTop] = useState(false);

  const backToTop = () => {
    if (window.scrollY >= 500) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", backToTop);
    return () => window.removeEventListener("scroll", backToTop);
  });

  return (
    <div>
      <Link to="top" spy={true} smooth={true} offset={0} duration={500}>
        <div
          className={
            toTop
              ? "border border-gray-800 opacity-70 rounded-full p-1 cursor-pointer right-7 bottom-24 fixed"
              : "hidden"
          }
        >
          <VscChevronUp />
        </div>
      </Link>
    </div>
  );
}
