import Image from "next/image";
import Link from "next/link";

const SmileBlissImage = () => {
  return (
    <div className="absolute top-0  p-4 shadow-sm rounded-sm dro p-shadow-sm w-screen h-1/2 bg-opacity-20 bg-cover bg-bottom">
      <Link href="/" className="absolute top-5 left-2">
        <Image
          alt="con"
          src="/static/img/marche/Smile blissロゴ(黄).webp"
          className="rounded-full"
          loading="lazy"
          width={130}
          height={130}
        />
      </Link>
    </div>
  );
};

export default SmileBlissImage;
