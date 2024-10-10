import { TitleH1 } from "@/components/Titles/TitleH1";
import { TitleH2 } from "@/components/Titles/TitleH2";
import { LIMIT } from "@/constants";
import { getList, getBannerList } from "@/libs/microcms";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import styles from "./index.module.css";
import { ToppageComponent } from "@/components/TopPage";
import {
  CraftDept,
  EnterpriseDept,
  KitchenCar,
  MassageDept,
  WorkshopDept,
  FoodDept,
  PerformanceDept,
} from "@/components/ShopList_WithoutImage";
import ShopNameListItemAutoScroll from "@/components/ShopNameListItemAutoScroll";

export const revalidate = 60;

export default async function Home() {
  const toppage = await getBannerList({
    limit: LIMIT,
  });
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="min-h-screen lg:px-20 2xl:px-32 md:px-16">
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
        <TitleH1 text="マルシェ情報" />
        <div className={styles.border}>
          <ToppageComponent banners={toppage.contents} />
        </div>
        <TitleH2 text="参加団体" />
        <div className={styles.border}>
          <div className="flex flex-row items-center justify-center">
            {/* Auto横スクロールの名前リスト */}
            <ShopNameListItemAutoScroll shops={data.contents} />
          </div>
          <div className="flex flex-col items-center justify-center sm:p-6">
            <div className="px-3">
              <TitleH1 text="部門別" />

              <div className="">
                <TitleH2 text="Kitchen Car" />
                <KitchenCar shops={data.contents} />
              </div>
              <div className="">
                <TitleH2 text="Food" />
                <FoodDept shops={data.contents} />
              </div>
              <div className="">
                <TitleH2 text="Workshop" />
                <WorkshopDept shops={data.contents} />
              </div>
              <div className="">
                <TitleH2 text="Craft" />
                <CraftDept shops={data.contents} />
              </div>
              <div className="">
                <TitleH2 text="Enterprise" />
                <EnterpriseDept shops={data.contents} />
              </div>
              <div className="">
                <TitleH2 text="パフォーマンス" />
                <PerformanceDept shops={data.contents} />
              </div>
              <div className="">
                <TitleH2 text="Others" />
                <MassageDept shops={data.contents} />
              </div>
            </div>
          </div>
        </div>

        <TitleH2 text="ボランティアスタッフ随時募集中！" />
        <div className={styles.border}>
          <div className="m-3 p-3 sm:p-6 leading-loose">
            イベントをお手伝いしていただけるボランティアさんを募集しています。
            <br />
            一緒にマルシェを楽しみながら参加して頂けたらと思います。
            <br />
            ボランティア参加を希望される方は、公式Instagramのメッセージ、または公式LINEにてお問い合わせくださいませ。
            <ol className="list-[number] mb-5 ml-3">
              <li className="ml-3 mb-2">
                <span className="font-bold">学生ボランティア</span>

                <br />
                <span className="text-sm">
                  本部のテントの設営・受付などお手伝いいただきます
                  (ボランティア証明書を無料で発行)。
                </span>
              </li>
              <li className="ml-3 mb-2">
                <span className="font-bold">一般ボランティア</span> <br />
                <span className="text-sm">
                  本部のテントの設営・受付などお手伝いいただきます。
                </span>
              </li>
              <li className="ml-3">
                <span className="font-bold">カメラ撮影ボランティア</span>
                <br />
                <span className="text-sm">
                  Webサイトや各種SNSへの掲載用の撮影をお願いしています。
                </span>
              </li>
            </ol>
          </div>
        </div>
        <TitleH2 text="協力会社、協賛企業の紹介" />

        <div className={styles.border}>
          <div className="m-3 p-3 sm:p-6 leading-loose">
            Smile Marcheは次の企業さまからご支援をいただいています。
            <ol className="list-[square]">
              <li className="ml-3">A</li>
              <li className="ml-3">B</li>
              <li className="ml-3">C</li>
              <li className="ml-3">D</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
