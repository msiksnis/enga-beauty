import TestimonialCard from "./TestimonialCard";
import { TestimonialData } from "./TestimonialData";

export default function Testimonials() {
  const data = TestimonialData;

  return (
    <div className="my-40 flex w-full flex-col items-center justify-center">
      <div className="mb-20 flex flex-col items-center justify-center text-gray-700 md:mb-28">
        <h1 className="font-lustria relative z-10 text-2xl capitalize md:text-4xl">
          What our clients say
        </h1>
        <div className="mt-1 w-9/12 border-b border-gray-500" />
        <p className="font-alexbrush mt-[-78px] text-6xl text-[#F4EEEC] opacity-60 md:mt-[-94px] md:text-7xl">
          Testimonials
        </p>
      </div>
      <div className="grid grid-flow-col md:gap-10 lg:gap-14">
        {data?.map((data) => (
          <TestimonialCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
