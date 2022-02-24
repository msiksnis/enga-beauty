import { useEffect, useState } from "react";
import TopOfHeader from "./TopOfHeader";
import BottomOfHeader from "./BottomOfHeader";
import SmallHeader from "./SmallHeader";
import MobHeader from "./Mobile/MobHeader";

export default function Header() {
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
    <header>
      <div className="md:hidden">
        <MobHeader />
      </div>
      <span className="hidden md:inline">
        <div
          className={
            headerSize ? "hidden" : "fixed top-0 z-50 flex w-full bg-white"
          }
        >
          <TopOfHeader />
        </div>

        <div
          className={
            headerSize
              ? "hidden"
              : "fixed top-0 z-50 mt-20 w-full bg-white shadow-md"
          }
        >
          <BottomOfHeader />
        </div>
        <div
          className={headerSize ? "fixed top-0 z-50 w-full bg-white" : "hidden"}
        >
          <SmallHeader />
        </div>
      </span>
    </header>
  );
}
