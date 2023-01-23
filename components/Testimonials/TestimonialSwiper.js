import SwiperComponent from "./SwiperComponent";

export default function TestimonialSwiper({ reviews }) {
  return (
    <div className="pt-6 md:pt-28">
      <div className="my-10 flex flex-col items-center justify-center text-gray-700 md:mb-14 md:mt-0">
        <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
          Hva våre kunder sier
        </h1>
      </div>
      <div className="">
        <SwiperComponent reviews={reviews} />
      </div>
    </div>
  );
}
