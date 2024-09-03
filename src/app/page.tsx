import { TitleH1 } from "@/components/Titles/TitleH1";
import { TitleH2 } from "@/components/Titles/TitleH2";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import styles from "./index.module.css";
import TimeLineHistory from "@/components/Timeline";
import ShopListItem from "@/components/ShopListItem";
import ShopList from "@/components/ShopList";
export const revalidate = 60;

export default async function Home() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="min-h-screen">
      <div>
        <div
          className="w-screen h-96 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/static/img/marche/event-top.webp",
          }}
        />
        <SmileBlissImage />
      </div>

      <div className="mx-3 p-3 sm:px-6 sm:mx-auto">
        <TitleH1 text="「第16回Smileマルシェ座間」主催！！" />
        <div className={styles.border}>
          {" "}
          <div className="sm:p-6"></div>
        </div>
        <TitleH2 text="参加団体" />
        <div className={styles.border}>
          <div className="sm:p-6 overflow-scroll">
            <ShopList articles={data.contents} />
          </div>
        </div>
        <TitleH1 text="smile座間の想い" />
        <div className={styles.border}>
          <div className="sm:p-6">
            <p className="mb-3">
              Smile座間は、ハンドメイド作家として活動していく中でたくさんの作家さんと出会い、「ハンドメイドで座間をもっと盛り上げたい！」と想い、座間で活動している作家を中心に販売イベントを始めました。
            </p>
            <p className="mb-3">
              第1回は座間駅前の小さなサロンをお借りして、地元作家9名で開催。
              その際、お客様アンケートで「ぜひ定期的に開催を！」、「もっと広い所でやってほしい」との声が多く、第2回からは芹沢公園で開催しています。
            </p>
            第2回は無謀とも思える8月の開催でしたが、出店者さまは全部で37ブース集まり、ご来場者さまは500～600人もの方々にお越しいただく事ができました。
            <p className="">
              第3回も皆さまに楽しんで頂き、もっと座間を好きになるキッカケが作れたら･･･と思っております。
              これまでマルシェ開催を通じて、様々な分野のご縁を繋ぐお手伝いをしてきました。
              <br />
              御社の活動などをたくさんの方々に知って頂けるよう、ぜひご協力させていただきます。
            </p>
          </div>
        </div>
        <TitleH2 text="ボランティア募集" />
        <div className={styles.border}>
          <div className="sm:p-6">
            Smile Marcheは次のようなボランティアを募集しています。
            <ol className="list-[square]">
              <li className="ml-3">A</li>
              <li className="ml-3">B</li>
              <li className="ml-3">C</li>
              <li className="ml-3">D</li>
            </ol>
          </div>
        </div>
        <TitleH2 text="協力会社、協賛企業の紹介" />

        <div className={styles.border}>
          <div className="sm:p-6">
            Smile Marcheは次の企業さまからご支援をいただいています。
            <ol className="list-[square]">
              <li className="ml-3">A</li>
              <li className="ml-3">B</li>
              <li className="ml-3">C</li>
              <li className="ml-3">D</li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center mx-6">
          <TimeLineHistory />
        </div>
      </div>
    </main>
  );
}
