/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { EnterpriseDept } from "@/components/ShopList/EnterpriseDept";
import { FoodDept } from "@/components/ShopList/FoodDept";
import { MassageDept } from "@/components/ShopList/MassageDept";
import { TitleH2 } from "@/components/Titles/TitleH2";
import { WorkshopDept } from "@/components/ShopList/WorkshopDept";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import { TitleH1 } from "@/components/Titles/TitleH1";
import styles from "./index.module.css";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import { CraftDept } from "@/components/ShopList/CraftDept";
import { Logo } from "@/components/logo";

export const revalidate = 60;

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <SmileBlissImage />
      <Logo />

      <div className={styles.box}>
        <TitleH1 text="出店者リスト" />

        <div className={styles.box}>
          <TitleH2 text="Workshop" />
          <WorkshopDept articles={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Craft" />
          <CraftDept articles={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Food" />
          <FoodDept articles={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Others" />

          <EnterpriseDept articles={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Enterprise" />

          <MassageDept articles={data.contents} />
        </div>
      </div>
      <div className="py-10 flex justify-center items-center">
        出店者専用公式LINE：
        <a href="https://line.me/R/ti/p/u0Ir6bv" target="_blank">
          <img
            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
            alt="友だち追加"
            width="100"
            height="100"
          />
        </a>
      </div>

      {/* <Pagination totalCount={data.totalCount} /> */}
    </main>
  );
}
