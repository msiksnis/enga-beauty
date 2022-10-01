import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";

export default function TopOfHeader() {
  return (
    <div className="flex w-full items-center justify-between px-8 pt-0 md:px-10">
      <div className="-mt-5 flex w-44 space-x-2 text-xl">
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <div className="md:scale-90 lg:scale-100">
        <Link href="/">
          <a>
            <Image
              className="object-contain"
              src="/logo/main_logo_black.png"
              width={350}
              height={100}
            />
          </a>
        </Link>
      </div>
      <div className="flex w-44 justify-end">
        <button
          className="font-poppins rounded border border-gray-900 bg-white px-8 py-1.5 text-sm uppercase text-gray-900 transition duration-300
          ease-in-out hover:bg-gray-900 hover:text-white md:py-2 md:px-10 md:text-base"
        >
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bestill Time
          </a>
        </button>
      </div>
    </div>
  );
}
