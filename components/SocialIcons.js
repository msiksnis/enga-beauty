import Image from "next/image";

export default function SocialIcons() {
  return (
    <div className="flex mt-4 space-x-6">
      <a
        href="https://www.instagram.com/enga_beauty_ba10/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition duration-300 ease-in-out transform"
      >
        <Image src="/images/social/instagram.png" width="30" height="30" />
      </a>
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition duration-300 ease-in-out transform"
      >
        <Image src="/images/social/facebook.png" width="30" height="30" />
      </a>
      <a
        href="https://tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition duration-300 ease-in-out transform"
      >
        <Image src="/images/social/tiktok.png" width="32" height="32" />
      </a>
    </div>
  );
}
