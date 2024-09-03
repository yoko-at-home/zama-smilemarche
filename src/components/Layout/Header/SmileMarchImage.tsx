import Image from "next/image";
import Link from "next/link";

const SmileMarcheImage = () => {
  return (
    <div className="absolute top-0 p-4 shadow-sm rounded-sm dro p-shadow-sm w-screen h-1/2 bg-opacity-20 bg-cover bg-left-top z-50">
      <Link href="/shops" className="absolute top-5 left-2">
        <Image
          alt="con"
          src="/static/img/marche/Smile blissロゴ(透過).png"
          className="rounded-full shadow-white shadow-xl hover:shadow-pink-100 sm:block"
          loading="lazy"
          width={100}
          height={100}
        />
        <p className="hover:text-pink-300 text-gray-600/70">To All Shops</p>
      </Link>
    </div>
  );
};

export default SmileMarcheImage;
