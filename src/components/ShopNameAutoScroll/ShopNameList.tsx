import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import type { TypeShop } from "@/types";

type Props = {
  shop: TypeShop;
};

export default function ShopNameList({ shop }: Props) {
  return (
    <li className="flex justify-center items-center mx-10 text-center my-12 py-4 shadow-xl px-3 keen-slider__slide number-slide rounded-full bg-slate-50/60">
      <Link href={`/shop_individual/${shop.id}`}>
        <span className=" text-xl font-extrabold text-gray-500 z-20  shadow-white">
          {shop.title}
        </span>
      </Link>
    </li>
  );
}
