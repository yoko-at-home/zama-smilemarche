import { TypeShop } from "@/types";
import Link from "next/link";

type Props = {
  shop: TypeShop;
};

export default function ShopNameListItem({ shop }: Props) {
  return (
    <li className="flex flex-row justify-center items-center my-6 mx-3 py-4 px-5 shadow-xl bg-gray-50">
      <Link href={`/shops/${shop.id}`}>
        <span className="font-mono font-extrabold text-gray-500 z-20  shadow-white">
          {shop.title}
        </span>
      </Link>
    </li>
  );
}
