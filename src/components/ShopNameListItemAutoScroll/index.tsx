import Link from "next/link";
import { Article } from "@/libs/microcms";
import "keen-slider/keen-slider.min.css";

type Props = {
  article: Article;
};

export default function ShopNameListItemAutoScroll({ article }: Props) {
  return (
    <li className="mx-10 text-center my-12 py-4 shadow-xl px-3 keen-slider__slide number-slide rounded-full bg-slate-50/60">
      <Link href={`/shops/${article.id}`}>
        <span className="text-xl font-extrabold text-gray-500 z-20  shadow-white">
          {article.title}
        </span>
      </Link>
    </li>
  );
}
