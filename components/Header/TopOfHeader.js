// import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";

export default function TopOfHeader() {
  return (
    <div className="flex w-full items-center justify-between px-8 pt-1.5 md:px-10">
      <div className="flex w-44 space-x-2 text-xl">
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <div className="scale-90 transform cursor-pointer md:scale-100">
        <Link href="/">
          <a>
            <Image
              className="object-contain"
              src="/LOGO-ONE.png"
              width={280}
              height={80}
            />
          </a>
        </Link>
      </div>
      <div className="flex w-44 justify-end">
        <button
          className="font-poppins rounded border border-black bg-white px-8 py-1.5 text-sm uppercase text-black transition duration-300
          ease-in-out hover:bg-black hover:text-white md:py-2 md:px-10 md:text-base"
        >
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Time
          </a>
        </button>
      </div>
    </div>
  );
}
