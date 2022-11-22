import Image from "next/image";

export default function Card({ image, title, price, directLink }) {
  return (
    <div>
      <div className="flex flex-col border border-black p-5 ">
        <Image
          src={image}
          alt={title}
          width={400}
          height={285}
          objectFit="cover"
        />
        <div className="mt-5 border-t border-b border-slate-500 py-5">
          <div className="flex items-center justify-between text-lg">
            <h1>{title}</h1>
            <p>{price} kr</p>
          </div>
          <div className="mt-5">
            <a
              href={directLink}
              rel="noreferrer"
              target="_blank"
              className="font-poppins flex w-full cursor-pointer justify-center rounded border border-gray-900 bg-gray-900 py-2 px-10 tracking-wider text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900"
            >
              KJØP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
