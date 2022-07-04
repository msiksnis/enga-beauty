import InstagramFeed from "./InstagramFeed";

export default function InstagramPosts() {
  return (
    <div className="md:px-20 lg:px-40">
      <div className="md:hidden">
        <InstagramFeed
          limit={18}
          token={
            "IGQVJWcGRDYlZAOOEN5dHdmSU9iVUVrUHBTZAjg1NDVGb01XMDJxNlBUQWtqNDR5T1B5UTdsanZAlbmRFTnJHZAnRObC02bjVrR0p2WWNpeUdNcEtCUWk2UHF6dExycUFmVWpYTEk0di1JdDdnSjZACMjdjcwZDZD"
          }
          //   token={process.env.NEXT_PUBLIC_ACCESS_TOKEN}
        />
      </div>
      <div className="hidden md:flex">
        <InstagramFeed
          limit={16}
          token={
            "IGQVJWcGRDYlZAOOEN5dHdmSU9iVUVrUHBTZAjg1NDVGb01XMDJxNlBUQWtqNDR5T1B5UTdsanZAlbmRFTnJHZAnRObC02bjVrR0p2WWNpeUdNcEtCUWk2UHF6dExycUFmVWpYTEk0di1JdDdnSjZACMjdjcwZDZD"
          }
          //   token={process.env.NEXT_PUBLIC_ACCESS_TOKEN}
        />
      </div>
    </div>
  );
}
