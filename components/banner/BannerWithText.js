import Image from "next/image";

export default function BannerWithText() {
  return (
    <div className="lg:pt-60 flex justify-center pt-24">
      <div id="container" className="">
        <div id="lg" className="lg:flex hidden">
          <div className="relative">
            <Image
              className="object-cover"
              src="/images/pics/nails-rose.jpg"
              width={1000}
              height={600}
            />
          </div>
          <div className="bottom-40 absolute grid grid-rows-3 ml-20">
            <h1 className="lora flex items-center text-2xl uppercase">
              Artificial nails
            </h1>
            <h2 className="opacity-70 poppins flex items-center h-auto">
              Starting from 250 NOK
            </h2>
            <div className="flex items-center space-x-4">
              <button className="lg:mt-10 w-36 lg:w-56 lg:py-2 lg:text-lg hover:bg-white hover:text-black py-1 mt-6 text-sm text-white bg-black border border-black rounded shadow-lg">
                <a
                  href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Les mer
                </a>
              </button>
              <button className="lg:mt-10 w-36 lg:w-56 lg:py-2 lg:text-lg hover:bg-black/90 hover:text-white py-1 mt-6 text-sm bg-white border border-black rounded shadow-lg">
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
            <div className="lora flex items-center justify-center text-2xl uppercase">
              Artificial nails
            </div>
            <div className="opacity-70 poppins flex items-center justify-center h-auto">
              Starting from 250 NOK
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button className="lg:mt-10 w-36 lg:w-56 lg:py-2 lg:text-lg hover:bg-white hover:text-black py-1 mt-6 text-sm text-white bg-black border border-black rounded shadow-lg">
                <a
                  href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bestill time
                </a>
              </button>
              <button className="lg:mt-10 w-36 lg:w-56 lg:py-2 lg:text-lg hover:bg-black/90 hover:text-white py-1 mt-6 text-sm bg-white border border-black rounded shadow-lg">
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
