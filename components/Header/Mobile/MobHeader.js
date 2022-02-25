import Image from "next/image";
import Link from "next/link";
import { useLocalState } from "../../../contexts/LocalState";
import HamburgerMenu from "./HamburgerMenu";

export default function MobHeader() {
  const { closeMenu } = useLocalState();

  return (
    <div className="fixed inset-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4 pt-2 shadow-md">
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/LOGO-ONE.png"
            width={200}
            height={45}
            onClick={closeMenu}
          />
        </a>
      </Link>
      <HamburgerMenu />
    </div>
  );
}
