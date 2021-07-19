import { SliderData } from "./SliderData";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative lg:flex justify-center items-center mx-20 mb-20">
      <IoIosArrowBack
        onClick={prevSlide}
        className="absolute top-[50%] left-8 text-3xl text-black  z-10 cursor-pointer opacity-50 hover:opacity-90"
      />
      <IoIosArrowForward
        onClick={nextSlide}
        className="absolute top-[50%] right-8 text-3xl text-black  z-10 cursor-pointer opacity-50 hover:opacity-90"
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="some image"
                className="object-cover object-top w-full h-[600px]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
