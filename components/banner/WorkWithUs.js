import Image from "next/image";

export default function WorkWithUs() {
  return (
    <>
      <div className="hidden lg:flex w-full px-20 mt-40 mb-10 h-full">
        <div className="relative">
          <Image
            className="object-cover"
            src="/images/WorkBG.jpg"
            width={1920}
            height={950}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-4/5 h-2/4 bg-white/40"
          >
            <div className="flex flex-col justify-center items-center h-full space-y-4">
              <h1 className="text-5xl poppins">Negletekniker?</h1>
              <h1 className="text-4xl poppins">Kom og jobb med oss.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-center mt-20 w-full h-full">
        <div className="relative">
          <Image
            className="object-cover"
            src="/images/WorkBG.jpg"
            width={450}
            height={300}
          />

          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-4/5 h-2/4 bg-white/40"
          >
            <div className="flex flex-col justify-center items-center h-full space-y-4">
              <h1 className="text-2xl poppins">Negletekniker?</h1>
              <h1 className="text-xl poppins">Kom og jobb med oss.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
