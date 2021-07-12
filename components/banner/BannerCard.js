export default function BannerCard({ text, title }) {
  return (
    <div className="flex flex-col justify-center items-center montserrat py-10">
      <h1 className="w-2/3 text-3xl lg:text-5xl mb-4 lg:mb-6 text-center playfair font-semibold opacity-90 uppercase">
        {title}
      </h1>
      <h2 className="w-2/3 text-lg lg:text-xl text-center opacity-60 poppins font-light">
        {text}
      </h2>
      <div className="flex">
        <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-56 mr-6 lg:mr-10 py-1 lg:py-2 bg-black/90 text-white text-sm lg:text-lg hover:bg-white hover:text-black/90 rounded shadow-lg">
          Les mer
        </button>
        <button className="mt-6 lg:mt-10 border border-black w-36 lg:w-56 py-1 lg:py-2 bg-white text-sm lg:text-lg hover:bg-black/90 hover:text-white rounded shadow-lg">
          Bestill tid
        </button>
      </div>
    </div>
  );
}
