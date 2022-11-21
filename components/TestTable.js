import Link from "next/link";

export default function Table({ treatment, price, description, directLink }) {
  console.log(directLink);
  return (
    <div className="group border-b px-2 pb-1 pt-3 transition-all duration-200 ">
      <div className="flex justify-between text-lg">
        <h1 className="font-light">{treatment}</h1>
        <div className="flex items-center">
          <Link href={directLink}>
            <a className="mr-10 mb-1 hidden rounded border p-2 text-base group-hover:inline">
              Book This Threatment
            </a>
          </Link>
          <div className="whitespace-nowrap tabular-nums">{price} kr</div>
        </div>
      </div>
      <div className="">{description}</div>
    </div>
  );
}
