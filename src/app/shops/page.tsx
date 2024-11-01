import { TitleH2 } from "@/components/Titles/TitleH2";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import styles from "./index.module.css";
import {
  CraftDept,
  EnterpriseDept,
  FoodDept,
  KitchenCar,
  MassageDept,
  WorkshopDept,
} from "@/components/ShopList_WithImage";
import { MetaHeader } from "@/components/Layout/Header/MetaHeader";

export const revalidate = 60;

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  const filteredData = data.contents.filter((item) => item.join !== false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24">
      <MetaHeader
        title="Smile marche Zama出店店舗一覧"
        description="Smile marche Zamaの参加店舗が勢揃い！"
      />
      <div className="px-5 md:px-20">
        <div className={styles.box}>
          <TitleH2 text="Kitchen Car" />
          <KitchenCar shops={filteredData} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Food" />
          <FoodDept shops={filteredData} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Workshop" />
          <WorkshopDept shops={filteredData} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Craft" />
          <CraftDept shops={filteredData} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Enterprise" />
          <EnterpriseDept shops={filteredData} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Others" />
          <MassageDept shops={filteredData} />
        </div>
      </div>
    </main>
  );
}
