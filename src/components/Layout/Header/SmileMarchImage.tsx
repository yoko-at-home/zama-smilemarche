import Image from "next/image";
import Link from "next/link";

const SmileMarcheImage = () => {
  return (
    <div className="relative">
      <Link href="/shops" className="absolute top-5 left-2">
        <Image
          alt="con"
          src="/static/img/marche/Smile blissロゴ(透過).png"
          className="rounded-full bg-white/80 hover:shadow-pink-100 sm:block hover:bg-pink-100/80"
          loading="lazy"
          width={100}
          height={100}
        />
        <p className="whitespace-nowrap hover:text-pink-300 text-gray-100/70 text-sm">
          To All Shops
        </p>
      </Link>
    </div>
  );
};

export default SmileMarcheImage;
