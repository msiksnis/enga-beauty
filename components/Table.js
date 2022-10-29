export default function Table({ treatment, price, description }) {
  return (
    <div className="mt-2.5 border-b border-gray-200/60 py-1">
      <div className="font-poppins mx-4 flex justify-between text-lg md:mx-10 lg:mx-0">
        <h1 className="font-light">{treatment}</h1>
        <div className="font-lustria ml-2 whitespace-nowrap tabular-nums">
          {price} kr
        </div>
      </div>
      <div className="mx-4 text-sm font-light opacity-60 md:mx-10 lg:mx-0">
        {description}
      </div>
    </div>
  );
}
