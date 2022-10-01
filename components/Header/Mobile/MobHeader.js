import Image from "next/image";
import Link from "next/link";
import { useLocalState } from "../../../contexts/LocalState";
import HamburgerMenu from "./HamburgerMenu";

export default function MobHeader() {
  const { closeMenu } = useLocalState();

  return (
    <div className="fixed inset-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4 shadow-md">
      <div className="">
        <Link href="/">
          <a>
            <Image
              className="object-contain"
              src="/logo/main_logo_black.png"
              width={170}
              height={70}
              onClick={closeMenu}
            />
          </a>
        </Link>
      </div>
      <div className="">
        <HamburgerMenu />
      </div>
    </div>
  );
}
