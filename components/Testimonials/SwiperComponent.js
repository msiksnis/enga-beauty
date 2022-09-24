import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

export default function SwiperComponent({ reviews }) {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide
          key={review._id}
          className="flex justify-center bg-white px-6 py-6 md:px-20 xl:px-40"
        >
          <div className="font-lustria relative z-10 font-light tracking-wider text-gray-500">
            <div className="absolute -top-6 left-1/2 z-[-99] -translate-x-1/2 text-5xl text-gray-100">
              <FaQuoteLeft />
            </div>
            <div className="pb-3 text-center text-lg leading-8">
              {review.comment}
              <div className="flex justify-center pt-4 text-lg">
                <ReactStars
                  edit={false}
                  count={review.rating}
                  size={22}
                  color="#eac802"
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center space-x-1 pb-10 italic">
              {/* <AiOutlineMinus /> */}
              <div className="text-xl">{review.reviewAuthor}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
