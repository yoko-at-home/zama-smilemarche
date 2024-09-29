import Link from "next/link";
import { Article } from "@/libs/microcms";
import "keen-slider/keen-slider.min.css";

type Props = {
  article: Article;
};

export default function ShopNameListItemAutoScroll({ article }: Props) {
  return (
    <li className="flex flex-row justify-center items-center mx-6 my-6 py-4 shadow-xl w-24 px-3 keen-slider__slide number-slide rounded-full">
      <Link href={`/shops/${article.id}`}>
        <span className="font-mono font-extrabold text-gray-500 z-20  shadow-white">
          {article.title}
        </span>
      </Link>
    </li>
  );
}
