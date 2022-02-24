import { useEffect, useRef, useState } from "react";
import { Data } from "./TestimonialData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Dots from "./Dots";

export default function TestimonialsTwo({ slides, autoPlay }) {
  console.log("scsdcsscd", Data);
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  console.log("this is the length!!!!", length);

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex justify-center items-center h-[400px] bg-gradient-to-r from-[#fad8815b] via-[#ff868650] to-[#fc82bf49]">
      {Data.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-100 transition duration-1000 ease transform scale-100"
                : "opacity-0 transition duration-1000 ease"
            }
            key={index}
          >
            {index === current && (
              <div className="w-full h-[400px] flex flex-col items-center justify-around px-6 lg:px-52">
                <p className="h-3/5 poppins lg:text-xl lg:font-normal flex items-center font-medium text-center text-gray-700">
                  {slide.text}
                </p>
                <div className="h-1/5 mb-14 flex items-center">
                  <img
                    src={slide.image}
                    alt=""
                    className="border-black/70 object-cover w-20 h-20 border-2 rounded-full"
                  />
                  <h2 className="bold poppins ml-5 text-2xl text-gray-500">
                    {slide.name}
                  </h2>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <section className="lg:inline hidden">
        <IoIosArrowBack
          onClick={prevSlide}
          className="absolute top-[96.5%] lg:top-1/2 left-24 lg:left-12 text-2xl lg:text-3xl text-black z-10 cursor-pointer opacity-50 hover:opacity-90"
        />
        <IoIosArrowForward
          onClick={nextSlide}
          className="absolute top-[96.5%] lg:top-1/2 right-24 lg:right-12 text-2xl lg:text-3xl text-black z-10 cursor-pointer opacity-50 hover:opacity-90"
        />
      </section>
      <Dots current={current} />
    </div>
  );
}

TestimonialsTwo.defaultProps = {
  slides: [],
  autoPlay: 10,
};
