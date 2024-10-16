import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import styles from "../index.module.css";
import { FoodDept } from "@/components/ShopList_WithImage";
import { ClipTextTitleReversed } from "@/components/Titles/ClipTextTitle";
import { KitchenCar } from "@/components/ShopList_WithImage";

export const revalidate = 60;

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24">
      <div className="px-5 md:px-20">
        <div className={styles.box}>
          <ClipTextTitleReversed>キッチンカー</ClipTextTitleReversed>
          <KitchenCar shops={data.contents} />
        </div>
      </div>
    </main>
  );
}
