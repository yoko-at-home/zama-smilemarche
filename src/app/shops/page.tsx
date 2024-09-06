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

export const revalidate = 60;

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <SmileBlissImage />

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
      {/* <Pagination totalCount={data.totalCount} /> */}
    </main>
  );
}
