import Link from "next/link";
import { Article } from "@/libs/microcms";

type Props = {
  article: Article;
};

export default function ShopNameListItem({ article }: Props) {
  return (
    <li className="flex flex-row justify-center items-center my-6 mx-3 py-4 px-5 shadow-xl">
      <Link href={`/shops/${article.id}`}>
        <span className="font-mono font-extrabold text-gray-500 z-20 whitespace-nowrap shadow-white">
          {article.title}
        </span>
      </Link>
    </li>
  );
}
