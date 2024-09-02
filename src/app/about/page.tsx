import { TitleH2 } from "@/components/Titles/TitleH2";
import TimeLineHistory from "@/components/Timeline";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center">
        <div
          className=""
          style={{
            backgroundImage:
              "url('/static/img/marche/Smile blissロゴ(透過).png')",
          }}
        >
          <div className="bg-gray-50 p-4 shadow-sm rounded-sm drop-shadow-sm">
            <video
              loop
              autoPlay
              muted
              // controls
              width="screen"
              src="/static/img/yatoyama/yatoyama.mov"
              className="rounded-sm"
            ></video>
          </div>
          <div className="text-gray-600 bg-gray-50/80 p-5 mt-5">
            <TitleH2 text="概要" />
            <p className="pt-10 font-light">
              ≪理念≫
              手作り作家さんや地域の事業者・ボランティア団体などを応援し、活躍できる場所を提供することで、お客様との交流と出会いの場として、
              地元活性の一助となるように地域に根ざした活動をします。
            </p>
            <p className="pt-5">
              ≪団体設立の経緯≫ Smile
              blissは、海老名市、綾瀬市、相模原市、町田市などで開催されているハンドメイドイベントに作家として参加し、沢山の作家さんに出会ってきました。
              その経験から、作家さんもお客様も座間の方がとても多いことに驚き、また座間市にハンドメイドイベントが無いことを残念に思っている声も多く聞きました。
              「私たちと同じ想いの方がいるのであれば、個々の力は小さくても、それがひとつになり大きな力になれば出来ないことは無い！」
              「ハンドメイドで座間をもっと盛り上げたい！」と想い座間で活動している作家さんを中心にハンドメイドイベントを始めました。
            </p>
          </div>
          <div className="flex justify-center mx-3">
            <TimeLineHistory />
          </div>
        </div>
      </div>
    </main>
  );
}
