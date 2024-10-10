import Link from "next/link";
import { TypeShop } from "@/types";

type Props = {
  shop: TypeShop;
};

export const ShopNameList = ({ shop }: Props) => {
  return (
    <div className="relative pt-2 px-2 mt-4 mx-2 rounded-t-[35px] shadow-lg  h-[280px] bg-[#e8e8e8] text-[#93a1a1] inset-0 drop-shadow-lg">
      <div className="absolute inset-0 pointer-events-none bg-[#93a1a1]/20 rounded-t-[35px]  p-1"></div>
      <Link className="" href={`/shops/${shop.id}`}>
        <p className="pt-2 flex flex-col justify-center text-center bg-[#93a1a1]/20 rounded-t-[30px] overflow-x-scroll h-16 text-[#aeaaaa] font-mono mb-3 font-semibold text-xl shadow-sm">
          {shop.title}
        </p>
      </Link>
      <Link href={`/shops/${shop.id}`}>
        {!shop.thumbnail?.url ? (
          <p className="flex justify-center items-center font-black  capitalize text-gray-400 h-36">
            no image
          </p>
        ) : (
          <div
            className="relative flex h-44 w-full items-end justify-start rounded bg-cover bg-center text-left"
            style={{
              backgroundImage: `url(${shop.thumbnail?.url})`,
            }}
          ></div>
        )}
      </Link>
    </div>
  );
};
