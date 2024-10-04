import Link from "next/link";
import styles from "./index.module.css";
import { TypeShop } from "@/types";

type Props = {
  shop: TypeShop;
};

export default function ShopListItem({ shop }: Props) {
  return (
    // <div className="">
    <div className={styles.card}>
      <div className={styles.card_overlay}></div>
      <Link href={`/shops/${shop.id}`}>
        <p className={styles.card_inner}>{shop.title}</p>
      </Link>
      <Link href={`/shops/${shop.id}`}>
        {!shop.thumbnail?.url ? (
          <p className="flex justify-center items-center font-black  capitalize text-gray-400 h-36">
            no image
          </p>
        ) : (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${shop.thumbnail?.url}?fm=webp&w=414 1x, ${shop.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <img
              src={shop.thumbnail?.url}
              alt=""
              className={styles.thumbnail}
            />
          </picture>
        )}
      </Link>
    </div>
    // </div>
  );
}
