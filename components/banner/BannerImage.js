import Image from "next/image";

export default function BannerImage() {
  return (
    <div className="w-full h-screen">
      <Image
        className="object-cover"
        src="/images/Banner_Manicure_Pedicure.jpg"
        width={1500}
        height={700}
      />
    </div>
  );
}
