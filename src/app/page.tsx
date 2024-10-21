import { TitleH2 } from "@/components/Titles/TitleH2";
import { LIMIT } from "@/constants";
import { getList, getBannerList } from "@/libs/microcms";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import styles from "./index.module.css";
import { SupportersComponent, ToppageComponent } from "@/components/TopPage";
import {
  CraftDept,
  EnterpriseDept,
  KitchenCar,
  MassageDept,
  WorkshopDept,
  FoodDept,
  PerformanceDept,
} from "@/components/ShopList_WithoutImage";
import {
  ClipTextTitle,
  ClipTextTitleReversed,
} from "@/components/Titles/ClipTextTitle";
import { ShopDepartmentAutoScroll } from "@/components/ShopNameAutoScroll/ShopDepartmentAutoScroll";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const toppage = await getBannerList({
    limit: LIMIT,
  });

  const data = await getList({
    limit: LIMIT,
  });

  const filteredData = data.contents.filter((item) => item.join !== false);

  return (
    <main className="min-h-screen w-screen">
      <div>
        <div
          className="h-96 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/static/img/marche/event-top.webp",
          }}
        />
        <SmileBlissImage />
      </div>

      <div className="mx-3 mt-5 sm:mt-10 md:mt-15 p-3 sm:px-6 lg:px-20 md:px-16">
        <div className={styles.border}>
          <ToppageComponent banners={toppage.contents} />
        </div>

        <ClipTextTitleReversed>❤️ 美味しいもの ❤️</ClipTextTitleReversed>
        <div className={styles.border}>
          <div className="flex flex-col items-center justify-center sm:p-6">
            <div className="px-3">
              <div className="pb-3">
                <ClipTextTitle>
                  🚚 キッチンカー 🚚
                  <Link href="/shops/kitchencar">&nbsp;→motto✨</Link>
                </ClipTextTitle>

                <KitchenCar shops={filteredData} />
              </div>
              <div className="pb-3">
                <ClipTextTitle>
                  美味しいお店が集結🔥
                  <Link href="/shops/food">&nbsp;→motto✨</Link>
                </ClipTextTitle>

                <FoodDept shops={filteredData} />
              </div>
            </div>
          </div>
        </div>
        <ClipTextTitleReversed>❤️ Dance & Sing ❤️ </ClipTextTitleReversed>
        <div className={styles.border}>
          <div className="flex flex-col items-center justify-center sm:p-6">
            <div className="px-3">
              <div className="pb-3">
                <ClipTextTitle>
                  🔥情熱が止まらない
                  <Link href="/shops/entertainment">&nbsp;→motto✨</Link>
                </ClipTextTitle>

                <PerformanceDept shops={filteredData} />
              </div>
            </div>
          </div>
        </div>

        <ClipTextTitleReversed>❤️ Workshop ❤️</ClipTextTitleReversed>
        <div className={styles.border}>
          <div className="flex flex-col items-center justify-center sm:p-6">
            <div className="px-3">
              <div className="pb-3">
                <ClipTextTitle>
                  楽しく、作っちゃおう♪
                  <Link href="/shops/workshop">&nbsp;→motto✨</Link>
                </ClipTextTitle>

                <WorkshopDept shops={filteredData} />
              </div>
            </div>
          </div>
        </div>
        <ClipTextTitleReversed>❤️ ❤️ Craft ❤️ ❤️</ClipTextTitleReversed>
        <div className={styles.border}>
          <div className="flex flex-col items-center justify-center sm:p-6">
            <ShopDepartmentAutoScroll shops={filteredData} category="craft" />
            <div className="px-3">
              <div className="pb-3">
                <ClipTextTitle>
                  素敵な作家さんたちとの出会い
                  <Link href="/shops/craft">&nbsp;→motto✨</Link>
                </ClipTextTitle>

                <CraftDept shops={filteredData} />
              </div>
            </div>

            <ClipTextTitle>
              見るだけでも楽しいよ！
              <Link href="/shops/craft">&nbsp;→motto✨</Link>
            </ClipTextTitle>
            <ShopDepartmentAutoScroll shops={filteredData} category="craft" />
          </div>
        </div>
        <ClipTextTitleReversed>❤️ ❤️ Healing ❤️ ❤️</ClipTextTitleReversed>
        <div className={styles.border}>
          <div className="flex flex-col items-center justify-center sm:p-6">
            <div className="px-3">
              <div className="pb-3">
                <ClipTextTitle>ほっこり、癒しどころ</ClipTextTitle>
                <EnterpriseDept shops={filteredData} />
                <ClipTextTitle>至福のひと時を...</ClipTextTitle>
              </div>

              <div className="pb-3">
                <MassageDept shops={filteredData} />
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

        <ClipTextTitleReversed>協力会社、協賛企業</ClipTextTitleReversed>
        <div className={styles.border}>
          <div className="m-3 p-3 sm:p-6 leading-loose">
            {/* 協力会社、協賛企業の紹介 */}
            <SupportersComponent banners={toppage.contents[0]} />
          </div>
        </div>
      </div>
    </main>
  );
}
