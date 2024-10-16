import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

const SmileBlissImage = () => {
  return (
    <div className="absolute top-0  p-4 rounded-sm w-screen h-1/4 bg-cover bg-bottom">
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
      <div className="absolute bottom-5 left-[40%] md:left-[45%]">
        <Logo />
      </div>
    </div>
  );
};

export default SmileBlissImage;
