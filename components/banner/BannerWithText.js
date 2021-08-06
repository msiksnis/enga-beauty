import Image from "next/image";

export default function BannerWithText() {
  return (
    <div className="pt-24 lg:pt-60 flex justify-center">
      <div id="container" className="">
        <div id="lg" className="hidden lg:flex">
          <div className="relative">
            <Image
              className="object-cover"
              src="/images/pics/nails-rose.jpg"
              width={1000}
              height={600}
            />
          </div>
          <div className="absolute bottom-40 ml-20 grid grid-rows-3">
            <h1 className="uppercase flex items-center text-2xl lora">
              Artificial nails
            </h1>
            <h2 className="flex items-center opacity-70 poppins h-auto">
              Starting from 250 NOK
            </h2>
            <div className="flex items-center space-x-4">
              <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-56 py-1 lg:py-2 bg-black text-sm text-white lg:text-lg hover:bg-white hover:text-black rounded shadow-lg">
                <a
                  href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Les mer
                </a>
              </button>
              <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-56 py-1 lg:py-2 bg-white text-sm lg:text-lg hover:bg-black/90 hover:text-white rounded shadow-lg">
                <a
                  href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bestill time
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile" className="lg:hidden">
          <Image
            className="object-cover"
            src="/images/pics/nails-rose.jpg"
            width={1000}
            height={600}
          />
          <div className="grid grid-rows-3">
            <div className="uppercase flex justify-center items-center text-2xl lora">
              Artificial nails
            </div>
            <div className="flex justify-center items-center opacity-70 poppins h-auto">
              Starting from 250 NOK
            </div>
            <div className="flex justify-center items-center space-x-4">
              <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-56 py-1 lg:py-2 bg-black text-sm text-white lg:text-lg hover:bg-white hover:text-black rounded shadow-lg">
                <a
                  href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bestill time
                </a>
              </button>
              <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-56 py-1 lg:py-2 bg-white text-sm lg:text-lg hover:bg-black/90 hover:text-white rounded shadow-lg">
                <a
                  href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bestill time
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
