import { useState } from "react";

export default function BurgerHamber() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="flex justify-center items-center">
      <div
        className={click ? "menu-btn open" : "menu-btn"}
        onClick={handleClick}
      >
        <div className="burger" onClick={handleClick}></div>
      </div>
    </div>
  );
}
