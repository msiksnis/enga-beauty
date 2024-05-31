import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function BannerMarch() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="font-poppins group relative mt-24 w-full md:mt-48 xl:px-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 6000 }}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        preloaderclass="custom-preloader"
        className={[
          ".swiper-pagination-bullet",
          ".swiper-button-prev",
          ".swiper-button-next",
        ]}
      >
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center bg-cover">
              <div className="md:hidden">
                <Image
                  priority
                  src="/images/banner/mobile-banner-march-three.png"
                  width={900}
                  height={580}
                  objectFit="cover"
                  data-src="/images/banner/mobile-banner-march-three.png"
                />
              </div>
              <div className="hidden md:inline">
                <Image
                  priority
                  src="/images/banner/banner-march-three.png"
                  width={1920}
                  height={904}
                  data-src="/images/banner/banner-march-three.png"
                />
              </div>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-10 sm:left-10 md:left-[10%]">
              <div className="w-36 text-left text-[4vw] font-extralight uppercase text-gray-700 sm:w-44 sm:leading-tight sm:tracking-wide md:pb-16 md:text-[clamp(1.875rem,3vw,3.125rem)] lg:pb-24">
                Ansiktsforyngelse lymfemassasje
              </div>
              <button className="rounded border border-gray-900 bg-gray-900 px-6 py-1 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:px-14 sm:py-2 sm:text-base md:px-16  md:text-lg lg:px-24">
                <a
                  href="https://atelierbeaute.as.me/schedule.php?appointmentType=42285068"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bestill time
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center bg-cover">
              <div className="md:hidden">
                <Image
                  priority
                  src="/images/banner/mobile-banner-march-one.png"
                  width={900}
                  height={580}
                  objectFit="cover"
                  data-src="/images/banner/mobile-banner-march-one.png"
                />
              </div>
              <div className="hidden md:inline">
                <Image
                  priority
                  src="/images/banner/banner-march-one.png"
                  width={1920}
                  height={904}
                  sdata-srcrc="/images/banner/banner-march-one.png"
                />
              </div>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-10 sm:left-10 md:left-[10%]">
              <div className="w-36 text-left text-[4vw] font-extralight uppercase text-gray-700 sm:w-44 sm:leading-tight sm:tracking-wide md:pb-16 md:text-[clamp(1.875rem,3vw,3.125rem)] lg:pb-24">
                Europeisk skulpturell ansiktsmassasje
              </div>
              <button className="rounded border border-gray-900 bg-gray-900 px-6 py-1 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:px-14 sm:py-2 sm:text-base md:px-16  md:text-lg lg:px-24">
                <a
                  href="https://atelierbeaute.as.me/?appointmentType=42284662"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bestill time
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="flex justify-center bg-cover">
              <div className="md:hidden">
                <Image
                  priority
                  src="/images/banner/mobile-banner-march-two.png"
                  width={900}
                  height={580}
                  objectFit="cover"
                  data-src="/images/banner/mobile-banner-march-two.png"
                />
              </div>
              <div className="hidden md:inline">
                <Image
                  priority
                  src="/images/banner/banner-march-two.png"
                  width={1920}
                  height={904}
                  data-src="/images/banner/banner-march-two.png"
                />
              </div>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-10 sm:left-10 md:left-[10%]">
              <div className="w-36 text-left text-[4vw] font-extralight uppercase text-gray-700 sm:w-44 sm:leading-tight sm:tracking-wide md:pb-16 md:text-[clamp(1.875rem,3vw,3.125rem)] lg:pb-24">
                <p className="whitespace-nowrap">Gua Sha</p>
                <p className="whitespace-nowrap">massasje for</p>
                <p className="whitespace-nowrap">ansikt og hodebunn</p>
              </div>
              <button className="rounded border border-gray-900 bg-gray-900 px-6 py-1 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:px-14 sm:py-2 sm:text-base md:px-16  md:text-lg lg:px-24">
                <a
                  href="https://atelierbeaute.as.me/schedule.php?appointmentType=42284893"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bestill time
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
