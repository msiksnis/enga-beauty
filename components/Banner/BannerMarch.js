import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerMarch() {
  return (
    <div className="relative mt-24 w-full md:mt-44 xl:px-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
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
                />
              </div>
              <div className="hidden md:inline">
                <Image
                  priority
                  src="/images/banner/banner-march-three.png"
                  width={1920}
                  height={904}
                />
              </div>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-10 sm:left-10 md:left-[10%]">
              <div className="font-arsenal w-36 text-left text-[4vw] uppercase text-gray-700 sm:w-44 sm:leading-tight sm:tracking-wide md:pb-16 md:text-[3.3vw] lg:pb-24">
                Lymfedrenasje massasje
              </div>
              <button className="font-poppins rounded border border-gray-900 bg-gray-900 px-6 py-1 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:px-14 sm:py-2 sm:text-base md:px-16  md:text-lg lg:px-24">
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
                />
              </div>
              <div className="hidden md:inline">
                <Image
                  priority
                  src="/images/banner/banner-march-one.png"
                  width={1920}
                  height={904}
                />
              </div>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-10 sm:left-10 md:left-[10%]">
              <div className="font-arsenal w-36 text-left text-[4vw] uppercase text-gray-700 sm:w-44 sm:leading-tight sm:tracking-wide md:pb-16 md:text-[3.3vw] lg:pb-24">
                Europeisk Skulpturell Ansiktsmassasje
              </div>
              <button className="font-poppins rounded border border-gray-900 bg-gray-900 px-6 py-1 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:px-14 sm:py-2 sm:text-base md:px-16  md:text-lg lg:px-24">
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
                />
              </div>
              <div className="hidden md:inline">
                <Image
                  priority
                  src="/images/banner/banner-march-two.png"
                  width={1920}
                  height={904}
                />
              </div>
            </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-10 sm:left-10 md:left-[10%]">
              <div className="font-arsenal w-36 text-left text-[4vw] uppercase text-gray-700 sm:w-44 sm:leading-tight sm:tracking-wide md:pb-16 md:text-[3.3vw] lg:pb-24">
                <p className="whitespace-nowrap">Gua Sha og</p> Hotstone
                ansiktsmassasje
              </div>
              <button className="font-poppins rounded border border-gray-900 bg-gray-900 px-6 py-1 text-sm uppercase text-white shadow-sm shadow-gray-400 transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 sm:px-14 sm:py-2 sm:text-base md:px-16  md:text-lg lg:px-24">
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
