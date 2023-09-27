import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";

export default function TopOfHeader() {
  return (
    <div className="mx-8 flex w-full items-center justify-between pt-0 md:mx-10">
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
        <button className="font-poppins rounded border border-gray-900 bg-gray-900 px-8 py-1.5 text-sm uppercase text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 md:py-2 md:px-10 md:text-base">
          <a
            href="https://atelierbeaute.as.me/"
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
