import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <div className="hidden lg:inline">
        <Image
          className="object-contain"
          src="/LOGO-ONE.png"
          width={180}
          height={44}
        />
      </div>
      <div className="lg:hidden">
        <Image
          className="object-contain"
          src="/favicon.ico"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
