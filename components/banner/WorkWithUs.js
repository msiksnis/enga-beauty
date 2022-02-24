import Image from "next/image";

export default function WorkWithUs() {
  return (
    <>
      <div className="lg:flex hidden w-full h-full px-20 mt-40 mb-10">
        <div className="relative">
          <Image
            className="object-cover"
            src="/images/WorkBG.jpg"
            width={1920}
            height={950}
          />
          <div className="top-1/2 left-1/2 h-2/4 bg-white/40 absolute w-4/5 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h1 className="poppins text-5xl">Negletekniker?</h1>
              <h1 className="poppins text-4xl">Kom og jobb med oss.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center w-full h-full mt-20">
        <div className="relative">
          <Image
            className="object-cover"
            src="/images/WorkBG.jpg"
            width={450}
            height={300}
          />

          <div className="top-1/2 left-1/2 h-2/4 bg-white/40 absolute w-4/5 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h1 className="poppins text-2xl">Negletekniker?</h1>
              <h1 className="poppins text-xl">Kom og jobb med oss.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
