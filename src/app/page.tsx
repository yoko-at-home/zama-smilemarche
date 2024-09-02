import { TitleH2 } from "@/components/Titles/TitleH2";
import Image from "next/image";
// import { LIMIT } from "@/constants";
// import { getList } from "@/libs/microcms";

// export const revalidate = 60;

export default async function Home() {
  // const data = await getList({
  //   limit: LIMIT,
  // });
  return (
    <main className="">
      <div className="relative">
        <div className="absolute top-0  p-4 shadow-sm rounded-sm drop-shadow-sm w-screen h-96">
          <Image
            src="/static/img/marche/event-caravan.png"
            alt={"zama smile march"}
            fill
          />
        </div>
        <div className="">
          <div className="text-gray-800  p-5 mb-32 font-serif">
            <Image
              alt="con"
              src="/static/img/marche/Smile blissロゴ(黄).webp"
              className="rounded-full"
              loading="lazy"
              width={130}
              height={130}
            />
            <div className="mt-96" />
            <TitleH2 text="概要" />

            <div className="pt-10 font-light ">
              <TitleH2 text="理念" />
              <p>
                手作り作家さんや地域の事業者・ボランティア団体などを応援し、活躍できる場所を提供することで、お客様との交流と出会いの場として、
                地元活性の一助となるように地域に根ざした活動をします。
              </p>
            </div>
            <p className="pt-5 font-light">
              <TitleH2 text="団体設立の経緯" />
              <p>
                Smile
                blissは、海老名市、綾瀬市、相模原市、町田市などで開催されているハンドメイドイベントに作家として参加し、沢山の作家さんに出会ってきました。
                その経験から、作家さんもお客様も座間の方がとても多いことに驚き、また座間市にハンドメイドイベントが無いことを残念に思っている声も多く聞きました。
                「私たちと同じ想いの方がいるのであれば、個々の力は小さくても、それがひとつになり大きな力になれば出来ないことは無い！」
                「ハンドメイドで座間をもっと盛り上げたい！」と想い座間で活動している作家さんを中心にハンドメイドイベントを始めました。
              </p>
            </p>
          </div>
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
    </main>
  );
}
