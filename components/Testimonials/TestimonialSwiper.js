import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import TestimonialCard from "./TestimonialCard";
import { TestimonialData } from "./TestimonialData";

export default function TestimonialSwiper() {
  const data = TestimonialData;

  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-[1000px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="flex w-full justify-center"
        >
          <SwiperSlide className="grid grid-flow-col">
            {data?.map((data) => (
              <TestimonialCard key={data.id} data={data} />
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
