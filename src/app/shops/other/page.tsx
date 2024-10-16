import { TitleH2 } from "@/components/Titles/TitleH2";
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

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-24">
      <div className="px-5 md:px-20">
        <div className={styles.box}>
          <ClipTextTitleReversed>Healing...癒しどころ</ClipTextTitleReversed>
          <EnterpriseDept shops={data.contents} />
        </div>
        <div className="mt-10">
          <div className={styles.box}>
            {/* <TitleH2 text="Others" /> */}
            <MassageDept shops={data.contents} />
          </div>
        </div>
      </div>
    </main>
  );
}
