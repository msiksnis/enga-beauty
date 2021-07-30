import Link from "next/link";
import BookNow from "../buttons/BookNow";

export default function Header() {
  return (
    <div className="flex items-center mx-20 mt-10 sticky z-30 border-b mb-10 pb-6">
      <div className="flex justify-start w-1/3">
        <nav className="space-x-6">
          <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link href="/pricelist">Prisliste</Link>
          </span>
          <span className="relative dropdown cursor-pointer opacity-70 hover:opacity-100 py-3">
            <span>Behandlinger</span>
            <div className="dropdown-content border border-gray-200 rounded text-lg">
              <span className="cursor-pointer opacity-70 hover:opacity-100 py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/spa-manicure-pedicure">
                  SPA manikyr og pedikyr
                </Link>
              </span>
              <span className="cursor-pointer opacity-70 hover:opacity-100 py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/waxing">Voksing</Link>
              </span>
              <span className="cursor-pointer opacity-70 hover:opacity-100 py-1 transform hover:scale-105 transition duration-300 ease-in-out">
                <Link href="/paraffin">Parafinbehandlinger</Link>
              </span>
            </div>
          </span>
          <span className="cursor-pointer opacity-70 hover:opacity-100 py-3 transform hover:scale-105 transition duration-300 ease-in-out">
            <Link href="/season-ticket">Klippekort</Link>
          </span>
        </nav>
      </div>
      <div className="flex justify-center w-1/3">
        <h1 className="text-4xl font-thin tracking-[0.1em] lora opacity-90">
          <Link href="/">ENGA BEAUTY</Link>
        </h1>
      </div>
      <div className="flex justify-end w-1/3">
        <BookNow />
      </div>
    </div>
  );
}
