import { useEffect, useState } from "react";

export default function WordSwapper() {
  const words = ["hands", "feet", "lashes", "brows"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === words.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="text-[13vw] font-bold uppercase leading-tight tracking-[0.25em] text-white md:text-[12vw] xl:text-[9vw]">
      {words[currentIndex]}
    </div>
  );
}
