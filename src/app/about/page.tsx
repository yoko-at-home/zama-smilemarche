import { TitleH2 } from "@/components/Titles/TitleH2";
import { TitleH1 } from "@/components/Titles/TitleH1";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import TimeLineHistory from "@/components/Timeline";
import { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";

export const revalidate = 60;
// ISRの再生成時間を設定

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Smile marche Zamaの思い | ${siteMetadata.title}`,
    description:
      "みんなが Smile になれる場所 - そんな場所を作りたくて、里山の魅力溢れる県立谷戸山公園を舞台に、Smileマルシェ座間を始めました。",
    openGraph: {
      title: `Smile marche Zamaの思い | ${siteMetadata.title}`,
      description:
        "みんなが Smile になれる場所 - そんな場所を作りたくて、里山の魅力溢れる県立谷戸山公園を舞台に、Smile marche Zamaを始めました。",
      images: siteMetadata.image,
    },
  };
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center bg-gray-100/90 z-20">
        <div
          className="z-0"
          style={{
            backgroundImage:
              "url('/static/img/marche/Smile blissロゴ(透過).png')",
          }}
        >
          <div className="">
            <SmileBlissImage />
          </div>
          <div className="text-gray-800 font-light p-5 bg-gray-50/90 ">
            <TitleH1 text="" />
            <div className="relative p-10 -z-20" />
            <div className="  mx-3 sm:mx-12 md:mx-32">
              <iframe
                className="h-60 md:h-96 w-full"
                // width="100%"
                // height="450"
                src="https://www.youtube.com/embed/sFsUT6agukc?si=k58djGuY1Sb7tm-f"
                title="第15回 Smile マルシェ風景"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                // allowFullScreen
              ></iframe>
              <TitleH1 text="概要" />
              <TitleH2 text="理念" />
              <p>
                手作り作家さんや地域の事業者・ボランティア団体などを応援し、活躍できる場所を提供することで、お客様との交流と出会いの場として、地元活性の一助となるように地域に根ざした活動をします。
              </p>
              <TitleH2 text="- みんなが Smile になれる場所 -" />
              <p>
                そんな場所を作りたくて、里山の魅力溢れる県立谷戸山公園を舞台に、Smile
                marche Zama
                を始めました。手づくりの温もりや作品を通じて、人と人のつながりを大切にしたい。エシカル
                &
                サステナブルなライフスタイルや価値観を提案していきたい。ワークショップを体験して、ものづくりの楽しさを感じてほしい。地域の魅力を再発見していきたい。作家さん同士のコミュニティの場にしてほしい。出店者、来場者、そして私たちスタッフも自然とみんなが笑顔になれる場所、それが「Smile
                marche Zama」です。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <TimeLineHistory />
      </div>
    </main>
  );
}
