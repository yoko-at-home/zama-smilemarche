import Link from "next/link";
import type { TypeShop } from "@/types";

type Props = {
  shop: TypeShop;
};

export const ShopNameList = ({ shop }: Props) => {
  return (
    <li className="flex justify-center items-center mx-10 text-center my-12 py-4 shadow-xl px-3 keen-slider__slide number-slide rounded-sm relative overflow-hidden w-24 h-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${shop.thumbnail?.url})`,
        }}
      />
      <div className="relative z-10 bg-slate-50/60 px-6 py-3 rounded-sm">
        <Link href={`/shop_individual/${shop.id}`}>
          <h2 className="text-lg font-semibold">{shop.title}</h2>
          <p className="text-sm text-gray-600">{shop.taste}</p>
        </Link>
      </div>
    </li>
  );
};
