import { Data } from "./TestimonialData";

const Dot = ({ current }) => (
  <span
    className={
      current
        ? "h-1 w-8 lg:w-4 mr-5 ml-5 lg:mr-2 lg:ml-2 cursor-pointer bg-gray-600 rounded"
        : "h-1 w-8 lg:w-4 mr-5 ml-5 lg:mr-2 lg:ml-2 cursor-pointer bg-gray-200 rounded"
    }
  />
);

export default function Dots({ slides, current }) {
  return (
    <div className="absolute bottom-4 w-full flex items-center justify-center">
      {Data.map((slide, index) => {
        return <Dot key={index} current={current === index} />;
      })}
    </div>
  );
}
