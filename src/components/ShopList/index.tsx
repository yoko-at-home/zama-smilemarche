import ShopListItem from "../ShopListItem";
import { ShopProps } from "@/types";

export default function ShopList({ shops }: ShopProps) {
  if (!shops) {
    return null;
  }
  if (shops.length === 0) {
    return <p>出店がありません。</p>;
  }
  return (
    <ul className="grid gap-4 grid-cols-3 sm:grid-cols-5 md:grid-cols-8 overflow-auto mx-auto">
      {shops.map((article) => (
        <ShopListItem key={article.id} shop={article} />
      ))}
    </ul>
  );
}
