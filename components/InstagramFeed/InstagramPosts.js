import InstagramFeed from "./InstagramFeed";

export default function InstagramPosts() {
  return (
    <div className="flex justify-center lg:px-20 xl:px-40">
      {/* mobile */}
      <div className="md:hidden">
        <InstagramFeed token={process.env.NEXT_PUBLIC_ACCESS_TOKEN} />
      </div>
      {/* desktop */}
      <div className="hidden md:flex">
        <InstagramFeed token={process.env.NEXT_PUBLIC_ACCESS_TOKEN} />
      </div>
    </div>
  );
}
