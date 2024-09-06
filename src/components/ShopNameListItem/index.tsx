import Link from "next/link";
import { Article } from "@/libs/microcms";

type Props = {
  article: Article;
};

export default function ShopNameListItem({ article }: Props) {
  return (
    <div className="mt-6">
      <div className="rounded-sm  bg-[#e0e0e0] my-6 mx-3 py-4 px-5 whitespace-nowrap inset-10 shadow-xl">
        <Link href={`/shops/${article.id}`}>
          <p className="flex justify-center items-center overflow-hidden font-mono font-extrabold text-gray-500 z-20">
            {article.title}
          </p>
        </Link>
      </div>
    </div>
  );
}
