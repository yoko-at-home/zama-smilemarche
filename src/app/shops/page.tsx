import { CraftDept } from "@/components/ArticleList/CraftDept";
import { EnterpriseDept } from "@/components/ArticleList/EnterpriseDept";
import { FoodDept } from "@/components/ArticleList/FoodDept";
import { MassageDept } from "@/components/ArticleList/MassageDept";
import { TitleH2 } from "@/components/Titles/TitleH2";
import { WorkshopDept } from "@/components/ArticleList/WorkshopDept";
import Pagination from "@/components/Pagination";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";

export const revalidate = 60;

export default async function Shops() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <div className="w-screen bg-grarelative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-gray-100 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#bdf503] after:dark:opacity-70 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]y-900  antialised">
        <div className=" mx-auto">
          <h1>出店者リスト</h1>

          <TitleH2 text="Workshop" />
          <WorkshopDept articles={data.contents} />
          <TitleH2 text="Craft" />
          <CraftDept articles={data.contents} />
          <TitleH2 text="Food" />
          <FoodDept articles={data.contents} />
          <TitleH2 text="Others" />
          <EnterpriseDept articles={data.contents} />
          <TitleH2 text="Enterprise" />
          <MassageDept articles={data.contents} />
        </div>
      </div>
      <Pagination totalCount={data.totalCount} />
    </main>
  );
}
