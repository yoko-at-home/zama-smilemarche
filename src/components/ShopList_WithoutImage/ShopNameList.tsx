import { TypeShop } from "@/types";
import Link from "next/link";

type Props = {
  shop: TypeShop;
};

export const ShopNameList = ({ shop }: Props) => {
  return (
    <li className="flex flex-row justify-center items-center my-6 mx-3 py-4 px-5 drop-shadow-lg bg-gray-50">
      <Link href={`/shop_individual/${shop.id}`}>
        <span className="font-semibold text-gray-500 z-20  shadow-white overflow-x-scroll">
          {shop.title}
        </span>
      </Link>
    </li>
  );
};
