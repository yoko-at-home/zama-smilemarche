import { TitleH2 } from "@/components/Titles/TitleH2";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import { TitleH1 } from "@/components/Titles/TitleH1";
import styles from "./index.module.css";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import { Logo } from "@/components/logo";
import { KitchenCar } from "@/components/ShopList_WithImage/KitchenCar";
import { FoodDept } from "@/components/ShopList_WithImage/FoodDept";
import {
  CraftDept,
  EnterpriseDept,
  MassageDept,
  WorkshopDept,
} from "@/components/ShopList_WithImage";

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
          <TitleH2 text="Kitchen Car" />
          <KitchenCar shops={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Food" />
          <FoodDept shops={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Workshop" />
          <WorkshopDept shops={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Craft" />
          <CraftDept shops={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Enterprise" />
          <EnterpriseDept shops={data.contents} />
        </div>
        <div className={styles.box}>
          <TitleH2 text="Others" />
          <MassageDept shops={data.contents} />
        </div>
      </div>
    </main>
  );
}
