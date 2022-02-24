import { useEffect, useState } from "react";
import { VscChevronUp } from "react-icons/vsc";

export default function ToTop() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="lg:inline hidden">
      {toTop && (
        <button
          onClick={scrollToTop}
          className="opacity-70 right-7 bottom-24 fixed p-1 border border-gray-800 rounded-full cursor-pointer"
        >
          <VscChevronUp />
        </button>
      )}
    </div>
  );
}
