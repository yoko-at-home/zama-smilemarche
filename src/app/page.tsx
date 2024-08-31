import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import { LIMIT } from "@/constants";
import { getList } from "@/libs/microcms";

export const revalidate = 60;

export default async function Home() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-screen bg-grarelative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]y-900 text-gray-700 p-6 antialised">
        <ArticleList articles={data.contents} />
      </div>
      <Pagination totalCount={data.totalCount} />
    </main>
  );
}
