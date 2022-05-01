import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

export default function TestimonialCard({ data }) {
  return (
    <div className="w-80">
      <div className="font-lustria relative z-10 text-xl font-light tracking-wider text-gray-500">
        <div className="absolute -top-6 left-1/2 z-[-99] -translate-x-1/2 text-5xl text-gray-100">
          <FaQuoteLeft />
        </div>
        <div className="pb-10 text-center leading-8">{data.text}</div>
        <div className="flex w-full items-center justify-center space-x-1 italic">
          <AiOutlineMinus />
          <p>{data.name}</p>
        </div>
      </div>
    </div>
  );
}
