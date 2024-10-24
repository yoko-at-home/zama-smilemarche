import { TitleH2 } from "@/components/Titles/TitleH2";
import { TitleH1 } from "@/components/Titles/TitleH1";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import TimeLineHistory from "@/components/Timeline";

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
                src="https://www.youtube.com/embed/qyFCoMeI-54?si=QpUzn_R_iGjPruGa"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                // allowFullScreen
              ></iframe>
              <TitleH1 text="概要" />
              <TitleH2 text="理念" />
              <p>
                手作り作家さんや地域の事業者・ボランティア団体などを応援し、活躍できる場所を提供することで、お客様との交流と出会いの場として、
                地元活性の一助となるように地域に根ざした活動をします。
              </p>
              <TitleH2 text="団体設立の経緯" />
              <p>
                Smile
                blissは、海老名市、綾瀬市、相模原市、町田市などで開催されているハンドメイドイベントに作家として参加し、沢山の作家さんに出会ってきました。
                その経験から、作家さんもお客様も座間の方がとても多いことに驚き、また座間市にハンドメイドイベントが無いことを残念に思っている声も多く聞きました。
                「私たちと同じ想いの方がいるのであれば、個々の力は小さくても、それがひとつになり大きな力になれば出来ないことは無い！」
                「ハンドメイドで座間をもっと盛り上げたい！」と想い座間で活動している作家さんを中心にハンドメイドイベントを始めました。
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
