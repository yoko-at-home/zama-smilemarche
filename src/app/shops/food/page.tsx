import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import styles from "../index.module.css";
import { FoodDept } from "@/components/ShopList_WithImage";
import { ClipTextTitleReversed } from "@/components/Titles/ClipTextTitle";

export const revalidate = 60;

export default async function FoodPage() {
  const data = await getList({
    limit: LIMIT,
  });
    const filteredData = data.contents.filter((item) => item.join !== true);
    return (
      <main className="flex min-h-screen flex-col items-center pb-24">
        <div className="px-5 md:px-20">
          <div className={styles.box}>
            <ClipTextTitleReversed>美味しいもの</ClipTextTitleReversed>
            <FoodDept shops={filteredData} />
          </div>
        </div>
      </main>
    );
}
