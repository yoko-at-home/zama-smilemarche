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
import { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";

export const revalidate = 60;
// ISRの再生成時間を設定

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `All shops | ${siteMetadata.title}`,
    description: siteMetadata.description,
    openGraph: {
      title: `All shops | ${siteMetadata.title}`,
      description: siteMetadata.description,
      images: siteMetadata.ogImage,
    },
  };
}

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  const filteredData = data.contents.filter((item) => item.join !== false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24">
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
