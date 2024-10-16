import { TitleH2 } from "@/components/Titles/TitleH2";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import styles from "./index.module.css";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import { Logo } from "@/components/logo";
import {
  CraftDept,
  EnterpriseDept,
  FoodDept,
  KitchenCar,
  MassageDept,
  WorkshopDept,
} from "@/components/ShopList_WithImage";

export const revalidate = 60;

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24">
      <div className="px-5 md:px-20">
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
