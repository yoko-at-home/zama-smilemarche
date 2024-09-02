import { TitleH1 } from "@/components/Titles/TitleH1";
import { TitleH2 } from "@/components/Titles/TitleH2";
import Image from "next/image";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";

// export const revalidate = 60;

export default async function Home() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="relative min-h-screen">
      <div>
        <div
          className="absolute top-0  p-4 shadow-sm rounded-sm drop-shadow-sm w-screen h-1/2 bg-opacity-20 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/static/img/marche/event-top.webp",
          }}
        />
        <div className="absolute top-5 left-2">
          <Image
            alt="con"
            src="/static/img/marche/Smile blissロゴ(黄).webp"
            className="rounded-full"
            loading="lazy"
            width={130}
            height={130}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div
          className="bg-cover bg-bottom z-10"
          style={{
            backgroundImage:
              "url('/static/img/marche/Smile blissロゴ(透過).png')",
          }}
        ></div>
      </div>
      <div className="absolute top-96">
        <TitleH1 text="「第16回Smileマルシェ座間」主催！！" />
        <TitleH2 text="参加団体" />
      </div>
    </main>
  );
}
