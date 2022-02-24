import Router from "next/router";

export default function BannerCard({ text, title, blackBtnTxt, linkto }) {
  return (
    <div className="montserrat flex flex-col items-center justify-center py-10">
      <h1 className="lg:text-5xl lg:mb-6 playfair opacity-90 w-2/3 mb-4 text-3xl font-semibold text-center uppercase">
        {title}
      </h1>
      <h2 className="lg:text-xl text-black/60 poppins w-2/3 text-lg font-light leading-snug text-center">
        {text}
      </h2>
      <div className="flex">
        <button
          onClick={() => {
            Router.push({
              pathname: `/${linkto}`,
            });
          }}
          className="lg:mt-10 w-36 lg:w-56 lg:mr-10 lg:py-2 bg-black/90 lg:text-lg hover:bg-white hover:text-black/90 py-1 mt-6 mr-6 text-sm text-white border border-black rounded shadow-lg"
        >
          {blackBtnTxt}
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
  );
}
