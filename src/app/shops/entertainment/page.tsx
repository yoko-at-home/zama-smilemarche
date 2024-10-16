import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";
import styles from "../index.module.css";
import {
  EnterpriseDept,
  MassageDept,
  PerformanceDept,
} from "@/components/ShopList_WithImage";
import { ClipTextTitleReversed } from "@/components/Titles/ClipTextTitle";

export const revalidate = 60;

export default async function EntertainmentPage() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      <div className="px-5 md:px-20">
        <div className={styles.box}>
          <ClipTextTitleReversed>🔥Entertainment🔥</ClipTextTitleReversed>
          <PerformanceDept shops={data.contents} />
        </div>
      </div>
    </main>
  );
}
